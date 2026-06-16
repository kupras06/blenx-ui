import { readFileSync, writeFileSync } from "fs";

const BASE_URL = "https://blenx-ui.vercel.app";

const staticRoutes = [
  "/",
  "/docs/installation",
];

function loadComponentRoutes(): string[] {
  try {
    const manifest = JSON.parse(
      readFileSync("public/docs/components.json", "utf-8"),
    );
    return Object.keys(manifest).map(
      (key) => `/components/${key}`,
    );
  } catch {
    return [];
  }
}

const routes = [...staticRoutes, ...loadComponentRoutes()];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`,
  )
  .join("")}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log(`✔ sitemap generated with ${routes.length} routes`);
