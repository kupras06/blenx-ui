import { writeFileSync } from "fs";

const BASE_URL = "https://blenx-ui.vercel.app";

const routes = [
  "/",
  "/docs/installation",
  "/components/button",
  "/components/dialog",
  "/components/table",
];

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