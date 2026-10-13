import "./style.css";
const phone = "+919182774775";
const address =
  "02-020/NR, Gajularamaram, Circle 26, Suraram, Hyderabad, Telangana";
const directions =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("New Sagar Restaurant & Bakers, " + address);
document.querySelector("#app").innerHTML = `
<a class="skip" href="#main">Skip to content</a>
<header><a class="brand" href="#home"><span class="brand-icon" aria-hidden="true">✳</span><span>NEW SAGAR<small>RESTAURANT & BAKERS</small></span></a><nav aria-label="Main navigation"><a href="#menu">Menu</a><a href="#about">Our place</a><a href="#visit">Visit us</a><a href="#faq">FAQs</a></nav><a class="button small" href="tel:${phone}">Call to order ↗</a></header>
<main id="main"><section id="home" class="hero"><div class="hero-copy"><p class="eyebrow">SURARAM, HYDERABAD</p><h1>Good food.<br>Great company.<br><em>Your next stop.</em></h1><p class="intro">From Hyderabadi biryani to kebabs and Chinese favourites, discover a world of flavour at New Sagar Restaurant & Bakers.</p><div class="actions"><a class="button" href="#menu">Explore the menu <span>↗</span></a><a class="text-link" href="tel:${phone}">Call to order ↗</a></div><p class="location-note">⌖ Gajularamaram · Suraram</p></div><div class="hero-art"><img id="hero-photo" src="/biryani-hero.jpg" width="1440" height="810" alt="Fresh Hyderabadi chicken biryani served in a copper handi with aromatic smoke rising" fetchpriority="high" decoding="async"><div class="steam" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="food-label">A little spice.<br><em>A lot of flavour.</em></div></div></section>
<div class="cuisine-strip" aria-label="Our cuisines">HYDERABADI <span>✳</span> BIRYANI <span>✳</span> NORTH INDIAN <span>✳</span> CHINESE <span>✳</span> KEBABS <span>✳</span> MUGHLAI <span>✳</span> SEAFOOD</div>
<section id="menu" class="section"><div class="section-heading"><div><p class="eyebrow">FIND YOUR FAVOURITES</p><h2>Something for every craving.</h2></div><p>Explore the menu, then give us a call to confirm availability and place your order.</p></div><div class="menu-tools"><label class="search">Search the menu<input id="search" type="search" placeholder="Search dishes or descriptions…"></label><label>Category<select id="category"><option value="">All categories</option></select></label><label>Preference<select id="diet"><option value="">All dishes</option><option value="vegetarian">Vegetarian</option><option value="non-vegetarian">Non-vegetarian</option></select></label></div><p class="menu-note">Menu items, prices, ingredients and availability may change. Call to confirm details, including allergen information.</p><div id="menu-status" role="status" aria-live="polite"></div><div id="menu-grid" class="menu-grid"></div><div class="menu-call"><span>Have a dish in mind?</span><a href="tel:${phone}">Call for today’s menu ↗</a></div><div class="order-platforms" aria-labelledby="order-platforms-title"><h3 id="order-platforms-title">Prefer to order online?</h3><p>Choose a platform to view the menu and check delivery availability for your address.</p><div class="platform-links"><a class="button order-platform" href="https://www.swiggy.com/city/hyderabad/new-sagar-restaurant-and-bakers-jeedimetla-suraram-rest619437" target="_blank" rel="noopener noreferrer">Order on Swiggy ↗</a><a class="button order-platform secondary" href="https://www.zomato.com/hyderabad/new-sagar-restaurant-bakers-suraram/order" target="_blank" rel="noopener noreferrer">Order on Zomato ↗</a></div></div></section>
<section id="about" class="about section"><div><p class="eyebrow">WELCOME TO NEW SAGAR</p><h2>Your neighbourhood.<br>Your kind of flavour.</h2></div><div><p>Find us in Gajularamaram, Suraram, Hyderabad. Our cuisines span North Indian, Chinese, kebabs, Mughlai, biryani, Hyderabadi and seafood.</p><p>Planning a visit or picking up a meal? Call our team for the current menu, opening hours and service options.</p><a class="text-link" href="#visit">Come find us ↗</a></div></section>
<section id="faq" class="section faq"><div class="section-heading"><div><p class="eyebrow">GOOD TO KNOW</p><h2>Before you visit or order.</h2></div><p>Quick answers for planning your meal. Please call the restaurant to confirm current details.</p></div><div class="faq-list"><details><summary>How do I place an order?</summary><p>Call <a href="tel:${phone}">+91 91827 74775</a> to confirm today’s menu, prices and availability, then place your order with the restaurant.</p></details><details><summary>What are the opening hours?</summary><p>Current opening hours have not been confirmed online. Please call before visiting.</p></details><details><summary>Can you confirm ingredients or allergen information?</summary><p>Please contact the restaurant directly to confirm ingredients, preparation and allergen handling for a specific dish before ordering.</p></details><details><summary>Do you offer delivery or takeaway?</summary><p>Call to confirm current service options, delivery availability for your location, and the ordering services supported.</p></details></div></section>
<section id="visit" class="section visit"><div><p class="eyebrow">MAKE YOUR WAY HERE</p><h2>See you in Suraram.</h2><address>${address}</address><div class="visit-details"><div><h3>Opening hours</h3><p id="hours">Please call to confirm current opening hours.</p></div><div><h3>Dine-in & takeaway</h3><p id="services">Please call to confirm available service options.</p></div></div><div class="actions"><a class="button" href="${directions}" target="_blank" rel="noopener noreferrer">Get directions ↗</a><a class="text-link" href="tel:${phone}">+91 91827 74775</a></div></div><div class="map-card"><span aria-hidden="true">⌖</span><p>GAJULARAMARAM</p><h3>Good food is<br>closer than you think.</h3><p>Circle 26 · Suraram · Hyderabad</p><a href="${directions}" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></div></section>
<section id="contact" class="contact section"><p class="eyebrow">LET’S TALK FOOD</p><h2>Your next meal starts<br>with a hello.</h2><p>Call the restaurant to ask about the menu and place an order.</p><div class="actions"><a class="button light" href="tel:${phone}">Call to order ↗</a><a id="whatsapp" class="text-link" href="https://wa.me/919182774775?text=Hello%2C%20is%20this%20New%20Sagar%20Restaurant%20%26%20Bakers%3F" target="_blank" rel="noopener noreferrer">Try WhatsApp ↗</a></div><p id="whatsapp-note" class="fine">WhatsApp availability on this number has not been confirmed. Call for a reliable response.</p><div id="online-order"></div></section><section id="website-services" class="portfolio-cta" aria-labelledby="website-services-title"><div class="portfolio-inner"><div class="portfolio-copy"><p class="eyebrow">07 / WEBSITE SERVICES</p><h2 id="website-services-title">Need a website<br><em>like this?</em></h2><p class="portfolio-description">I build modern, responsive websites for restaurants and local businesses—designed to make your brand look credible, explain your offer clearly, and turn visitors into enquiries.</p><ul class="portfolio-tags" aria-label="Website services"><li>Business websites</li><li>Restaurant websites</li><li>Responsive design</li><li>Menu and order links</li><li>Deployment</li></ul><div class="portfolio-actions"><a class="button portfolio-button" href="#project-enquiry">Start a project ↗</a><a class="portfolio-source" href="https://github.com/ashokudu14-lang/restaurant-website" target="_blank" rel="noopener noreferrer">View GitHub ↗</a></div><p class="portfolio-disclosure">Independent portfolio concept by Ashok. This design is not an official restaurant website.</p></div><div class="portfolio-details" aria-label="Website project details"><div><span>WHAT I BUILD</span><p>Business websites · Restaurant websites</p></div><div><span>FOCUS</span><p>Responsive design · Clear calls to action</p></div><div><span>PROCESS</span><p>Design · Develop · Deploy</p></div></div></div><div id="project-enquiry" class="project-enquiry" aria-labelledby="project-enquiry-title"><div class="enquiry-intro"><p class="eyebrow">08 / PROJECT ENQUIRY</p><h3 id="project-enquiry-title">Let’s build<br><em>your website.</em></h3><p>Tell me a little about your project. Choose email or WhatsApp to get in touch.</p><div class="enquiry-contact"><a href="mailto:ashokudu.14@gmail.com">ashokudu.14@gmail.com ↗</a><a href="https://wa.me/917013911661?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noopener noreferrer">WhatsApp · +91 70139 11661 ↗</a></div></div><form id="project-enquiry-form" class="enquiry-form"><label>Your name<input name="name" type="text" autocomplete="name" placeholder="Enter your name" required maxlength="100"></label><label>Your email<input name="email" type="email" autocomplete="email" placeholder="Enter your email address" required maxlength="254"></label><label class="field-wide">Your goal<select name="projectType" required><option value="">Select the type of website</option><option>Restaurant website</option><option>Business website</option><option>Landing page</option><option>Portfolio website</option><option>Other</option></select></label><label class="field-wide">Project details<textarea name="details" rows="4" placeholder="What would you like your website to do?" maxlength="1000"></textarea></label><button class="button portfolio-button field-wide" type="submit">Continue on WhatsApp ↗</button><p class="form-note field-wide">WhatsApp will open with your enquiry prefilled. Review it and tap Send.</p></form></div></section></main>
<footer><a class="brand" href="#home">NEW SAGAR<small>RESTAURANT & BAKERS</small></a><p>Gajularamaram, Suraram · Hyderabad</p><a href="tel:${phone}">+91 91827 74775</a></footer><div class="mobile-bar"><a href="#menu">View menu</a><a href="tel:${phone}">Call to order ↗</a></div>`;
// Lightweight pointer depth and scroll reveals; content stays visible if motion is unavailable.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reduceMotion.matches) {
  const hero = document.querySelector(".hero");
  let pointerFrame = 0;
  let pointerPoint = null;
  const resetPointer = () => {
    hero.style.setProperty("--image-x", "0px");
    hero.style.setProperty("--image-y", "0px");
    hero.style.setProperty("--label-x", "0px");
    hero.style.setProperty("--label-y", "0px");
  };
  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    pointerPoint = { x: event.clientX, y: event.clientY };
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      if (!pointerPoint) return;
      const rect = hero.getBoundingClientRect();
      const nx = Math.max(-0.5, Math.min(0.5, (pointerPoint.x - rect.left) / rect.width - 0.5));
      const ny = Math.max(-0.5, Math.min(0.5, (pointerPoint.y - rect.top) / rect.height - 0.5));
      hero.style.setProperty("--image-x", `${(-nx * 10).toFixed(1)}px`);
      hero.style.setProperty("--image-y", `${(-ny * 8).toFixed(1)}px`);
      hero.style.setProperty("--label-x", `${(nx * 9).toFixed(1)}px`);
      hero.style.setProperty("--label-y", `${(ny * 7).toFixed(1)}px`);
    });
  });
  hero.addEventListener("pointerleave", () => {
    pointerPoint = null;
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    resetPointer();
  });

  const revealTargets = document.querySelectorAll(
    ".section-heading, .menu-tools, .menu-call, .about > *, .visit > *, .faq-list > *, .portfolio-inner > *, .project-enquiry > *",
  );
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-index", String(Math.min(index, 5)));
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9)
      element.classList.add("is-visible");
  });
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    revealTargets.forEach((element) => {
      if (!element.classList.contains("is-visible")) revealObserver.observe(element);
    });
    document.documentElement.classList.add("motion-ready");
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }
}

let items = [];
const status = document.querySelector("#menu-status"),
  grid = document.querySelector("#menu-grid");
const escapeHTML = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const safeUrl = (value) => {
  try {
    const u = new URL(value);
    return u.protocol === "https:" ? u.href : null;
  } catch {
    return null;
  }
};

const enquiryForm = document.querySelector("#project-enquiry-form");
enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const details = String(data.get("details") || "").trim();
  const lines = [
    "Hi Ashok, I would like to discuss a website project.",
    `Name: ${String(data.get("name") || "").trim()}`,
    `Email: ${String(data.get("email") || "").trim()}`,
    `Project type: ${String(data.get("projectType") || "").trim()}`,
    details ? `Project details: ${details}` : "",
  ].filter(Boolean);
  const url = new URL("https://wa.me/917013911661");
  url.searchParams.set("text", lines.join("\n"));
  window.open(url.toString(), "_blank", "noopener,noreferrer");
});

function render() {
  const q = document.querySelector("#search").value.trim().toLowerCase(),
    cat = document.querySelector("#category").value,
    diet = document.querySelector("#diet").value;
  const filtered = items.filter(
    (i) =>
      (!q ||
        `${i.name} ${i.description ?? ""} ${i.category}`
          .toLowerCase()
          .includes(q)) &&
      (!cat || i.category === cat) &&
      (!diet || i.diet === diet),
  );
  grid.innerHTML = filtered
    .map(
      (i) =>
        `<article class="dish">${safeUrl(i.photo_url) ? `<img src="${escapeHTML(safeUrl(i.photo_url))}" alt="${escapeHTML(i.name)}" loading="lazy" width="400" height="240">` : ""}<div class="dish-content"><p class="dish-category">${escapeHTML(i.category)}</p><h3>${escapeHTML(i.name)}</h3><p>${escapeHTML(i.description || "")}</p><div class="dish-meta"><span>${escapeHTML(i.diet === "vegetarian" ? "● Vegetarian" : i.diet === "non-vegetarian" ? "● Non-vegetarian" : "Dietary details: ask us")}</span><strong>${i.price == null ? "Call for price" : new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(i.price)}</strong></div><p class="availability ${i.available ? "" : "unavailable"}">${i.available ? "Available · confirm when ordering" : "Currently unavailable"}</p></div></article>`,
    )
    .join("");
  status.textContent = filtered.length
    ? `${filtered.length} ${filtered.length === 1 ? "dish" : "dishes"}`
    : items.length
      ? "No dishes match your search. Try another search or category."
      : "Our online menu is coming soon. Call +91 91827 74775 for current dishes, prices and availability.";
}
async function loadMenu() {
  const url = import.meta.env.VITE_SUPABASE_URL,
    key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) {
    render();
    return;
  }
  if (!items.length) status.textContent = "Loading menu…";
  try {
    const res = await fetch(
      `${url.replace(/\/$/, "")}/rest/v1/menu_items?select=*&published=eq.true&order=sort_order.asc,name.asc`,
      {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!res.ok) throw Error("Menu unavailable");
    const data = await res.json();
    if (!Array.isArray(data)) throw Error("Invalid menu");
    items = data;
    const select = document.querySelector("#category"),
      selected = select.value;
    select.innerHTML =
      '<option value="">All categories</option>' +
      [...new Set(items.map((i) => i.category))]
        .sort()
        .map(
          (c) => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`,
        )
        .join("");
    if ([...select.options].some((o) => o.value === selected))
      select.value = selected;
    render();
  } catch {
    status.innerHTML =
      'The live menu could not be refreshed. Please call for current availability. <button id="retry" type="button">Try again</button>';
    document.querySelector("#retry").onclick = loadMenu;
  }
}
for (const id of ["search", "category", "diet"])
  document.querySelector("#" + id).addEventListener("input", render);
loadMenu();
setInterval(() => {
  if (!document.hidden) loadMenu();
}, 15000);
fetch("/business.json")
  .then((r) => {
    if (!r.ok) throw Error();
    return r.json();
  })
  .then((b) => {
    if (b.hours) document.querySelector("#hours").textContent = b.hours;
    if (b.serviceDetails)
      document.querySelector("#services").textContent = b.serviceDetails;
    if (b.whatsappConfirmed) {
      document.querySelector("#whatsapp").textContent = "WhatsApp us ↗";
      document.querySelector("#whatsapp-note").textContent =
        "Contact the restaurant on WhatsApp to discuss your order.";
    }
    const order = safeUrl(b.onlineOrderingUrl);
    if (order) {
      const a = document.createElement("a");
      a.href = order;
      a.textContent = "Order through our ordering partner ↗";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.querySelector("#online-order").append(a);
    }
    const photo = safeUrl(b.heroPhotoUrl);
    if (photo) {
      document.querySelector("#hero-photo").src = photo;
      document.querySelector("#hero-photo").alt =
        "New Sagar Restaurant & Bakers";
    }
  })
  .catch(() => {});
