import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.route("https://menu-test.supabase.co/**", (route) =>
    route.fulfill({ json: [] }),
  );
});
test("customer discovery, navigation and contact links", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/New Sagar/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Explore the menu" }).click();
  await expect(page.locator("#menu-status")).toContainText(
    "online menu is coming soon",
  );
  await page.getByRole("searchbox").fill("biryani");
  await expect(page.locator("#menu-status")).toContainText("current dishes");
  await expect(page.locator('#contact a[href^="tel:"]')).toHaveAttribute(
    "href",
    "tel:+919182774775",
  );
  await expect(
    page.getByRole("link", { name: "Get directions" }),
  ).toHaveAttribute("href", /google.com\/maps\/dir\/.*destination=/);
  await expect(page.locator("#hours")).toContainText("call to confirm");
  await expect(page.locator("#whatsapp")).toHaveAttribute(
    "href",
    /^https:\/\/wa.me\/919182774775/,
  );
  await expect(page.locator("#whatsapp-note")).toContainText(
    "not been confirmed",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
  const json = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(JSON.parse(json).telephone).toBe("+919182774775");
});
test("navigation targets exist and placeholder is identified", async ({
  page,
}) => {
  await page.goto("/");
  const hrefs = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) => links.map((a) => a.getAttribute("href")));
  for (const href of hrefs) await expect(page.locator(href)).toHaveCount(1);
  await expect(page.locator("#hero-photo")).toHaveAttribute(
    "alt",
    /placeholder/,
  );
  await expect(page.locator("#hero-photo")).toHaveJSProperty(
    "naturalWidth",
    720,
  );
});

test("live menu search, filters, availability and refresh", async ({
  page,
}) => {
  let price = 220;
  await page.route("https://menu-test.supabase.co/**", (route) =>
    route.fulfill({
      json: [
        {
          name: "Test Biryani",
          category: "Biryani",
          description: "Test menu item",
          diet: "non-vegetarian",
          price,
          available: true,
        },
        {
          name: "Test Paneer",
          category: "North Indian",
          description: "Test vegetarian item",
          diet: "vegetarian",
          price: 180,
          available: false,
        },
      ],
    }),
  );
  await page.goto("/");
  await expect(page.locator(".dish")).toHaveCount(2);
  await page.getByRole("searchbox").fill("paneer");
  await expect(page.locator(".dish")).toHaveCount(1);
  await expect(page.locator(".dish")).toContainText("Currently unavailable");
  await page.getByRole("searchbox").fill("missing");
  await expect(page.locator("#menu-status")).toContainText("No dishes match");
  await page.getByRole("searchbox").fill("");
  await page.locator("#category").selectOption("Biryani");
  await expect(page.locator(".dish")).toHaveCount(1);
  await page.locator("#category").selectOption("");
  await page.locator("#diet").selectOption("vegetarian");
  await expect(page.locator(".dish")).toContainText("Test Paneer");
  await page.locator("#diet").selectOption("");
  price = 250;
  await expect(page.locator(".dish").first()).toContainText("₹250", {
    timeout: 20000,
  });
});
test("menu error and retry recovery", async ({ page }) => {
  await page.route("https://menu-test.supabase.co/**", (route) =>
    route.fulfill({ status: 503, json: { error: "Unavailable" } }),
  );
  await page.goto("/");
  await expect(page.locator("#menu-status")).toContainText(
    "could not be refreshed",
  );
  await page.route("https://menu-test.supabase.co/**", (route) =>
    route.fulfill({ json: [] }),
  );
  await page.getByRole("button", { name: "Try again" }).click();
  await expect(page.locator("#menu-status")).toContainText(
    "online menu is coming soon",
  );
});

test("FAQ and menu guidance are available and interactive", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "FAQs" }).click();
  await expect(page.locator("#faq")).toBeInViewport();
  const allergenFaq = page.locator("#faq details").filter({ hasText: "allergen information" });
  await allergenFaq.locator("summary").click();
  await expect(allergenFaq).toHaveAttribute("open", "");
  await expect(allergenFaq).toContainText("confirm ingredients");
  await expect(page.locator(".menu-note")).toContainText("allergen information");
});

test("online ordering opens the restaurant's confirmed delivery listings", async ({ page }) => {
  await page.goto("/");
  const swiggy = page.getByRole("link", { name: "Order on Swiggy" });
  const zomato = page.getByRole("link", { name: "Order on Zomato" });
  await expect(swiggy).toHaveAttribute("href", "https://www.swiggy.com/city/hyderabad/new-sagar-restaurant-and-bakers-jeedimetla-suraram-rest619437");
  await expect(zomato).toHaveAttribute("href", "https://www.zomato.com/hyderabad/new-sagar-restaurant-bakers-suraram/order");
  for (const link of [swiggy, zomato]) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});

test("order links sit beside the menu and the portfolio pitch is disclosed", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#menu .order-platforms")).toHaveCount(1);
  await expect(page.locator("#contact .order-platforms")).toHaveCount(0);
  const pitch = page.locator("#website-services");
  await expect(pitch.getByRole("heading", { name: /Need a website like this/ })).toBeVisible();
  await expect(pitch).toContainText("Independent portfolio concept by Ashok");
  await expect(pitch.getByRole("link", { name: "View GitHub" })).toHaveAttribute("href", "https://github.com/ashokudu14-lang/restaurant-website");
});

test("project enquiry opens a prefilled WhatsApp message", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('a[href="mailto:ashokudu.14@gmail.com"]')).toBeVisible();
  await expect(page.locator('#project-enquiry a[href^="https://wa.me/917013911661"]')).toBeVisible();
  await page.getByLabel("Your name").fill("Sample Visitor");
  await page.getByLabel("Your email").fill("visitor@example.com");
  await page.getByLabel("Your goal").selectOption({ label: "Restaurant website" });
  await page.getByLabel("Project details").fill("Need a responsive menu website.");
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue on WhatsApp" }).click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(/wa\.me\/917013911661/);
  const message = new URL(popup.url()).searchParams.get("text");
  expect(message).toContain("Sample Visitor");
  expect(message).toContain("visitor@example.com");
  expect(message).toContain("Restaurant website");
  await popup.close();
});


test("motion adds pointer-reactive hero depth and labels steam as decorative", async ({ page }) => {
  await page.goto("/");
  const steam = page.locator(".steam");
  const photo = page.locator("#hero-photo");
  await expect(photo).toHaveAttribute("src", "/biryani-hero.jpg");
  await expect.poll(() => photo.evaluate((image) => image.naturalWidth)).toBeGreaterThan(1000);
  await expect(steam).toHaveAttribute("aria-hidden", "true");
  await expect(steam.locator("span")).toHaveCount(6);
  const hero = page.locator(".hero");
  await page.mouse.move(60, 140);
  await expect.poll(() => hero.evaluate((element) => element.style.getPropertyValue("--image-x"))).not.toBe("");
  await expect(hero).toHaveCSS("position", "relative");
});

test("reduced-motion preference disables long running motion", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  const duration = await page.locator(".steam span").first().evaluate((element) => getComputedStyle(element).animationDuration);
  expect(parseFloat(duration)).toBeLessThan(0.001);
  await context.close();
});
