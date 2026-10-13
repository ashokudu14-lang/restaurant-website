# New Sagar Restaurant & Bakers

Mobile-first restaurant website built with Vite and vanilla JavaScript. No invented menu items, prices, hours, reviews or service promises. Artwork is explicitly labeled as replaceable illustration.

## Develop and verify

Node.js 22.12+ (validated with 24.19) and npm required.

```sh
npm ci --cache /tmp/restaurant-npm-cache
npm run dev -- --port 5173
npm run build
PLAYWRIGHT_BROWSERS_PATH=/tmp/restaurant-browsers npx playwright install chromium
PLAYWRIGHT_BROWSERS_PATH=/tmp/restaurant-browsers npm test
# Alternatively, use installed Chromium:
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test
```

`npm run preview -- --port 4173` serves the production build. Deploy `dist/` to a static HTTPS host. Set your final domain/canonical URL after choosing hosting.

## Business information

Edit `public/business.json` for owner-confirmed hours, dine-in/takeaway details, WhatsApp confirmation, an HTTPS ordering destination and supplied hero photo URL. Empty values intentionally display call-to-confirm messages. Replace `public/food-placeholder.svg` with supplied restaurant artwork or set `heroPhotoUrl`. Do not add unconfirmed claims. The WhatsApp link is labeled unconfirmed until the owner verifies it. Orders are arranged by telephone; this site has no checkout, payment processing, delivery promise or order queue.

## Optional live Supabase menu

1. Create a Supabase project and run `supabase/schema.sql` once in its SQL editor.
2. Copy `.env.example` to `.env.local`, setting the project HTTPS URL and **anon/publishable key**. Never use a service-role/secret key in a `VITE_` variable: all such variables are public in the browser bundle.
3. Restart Vite (or rebuild the deployment) to apply initial connection configuration. Subsequent menu changes need no redeploy: public data refreshes every 15 seconds while the page is visible.
4. Authorized project owners can manage menu data using Supabase Dashboard Table Editor. Create restaurant administrator Auth accounts and add their UUIDs to `menu_admins` using trusted SQL: `insert into public.menu_admins(user_id) values ('ADMIN_AUTH_UUID');`. Row-level security lets those authenticated accounts manage items through Supabase clients. Ordinary public visitors can only read published items. A custom admin login/editor UI is not included.
5. Add verified names, category, description, price in INR, diet, HTTPS photo URL and availability. Set `published=true` for public display; draft items are hidden. No sample prices are seeded.

Menu search, category and diet filters work with live data. Missing configuration produces an honest empty state; failed requests offer retry. Existing results stay visible on refresh failure with a warning. Supabase connectivity and admin permissions require a configured project to validate in production; browser tests use mocked API responses.

No credentials are required for the default phone-based site. Optional live menu access requires network access to your exact Supabase project hostname. Optional typography uses fonts.googleapis.com and fonts.gstatic.com, with local font fallbacks.
