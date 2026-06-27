import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  ClientOnly,
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Header, ThemeEffect } from "@/components/header";
import { Container } from "@blenx-dev/components";
import appCss from "@/app.css?url";
import { Analytics } from "@vercel/analytics/react";
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: "utf8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Blenx UI — Modern React Component Library powered by Vanilla Extract & Base UI",
      },
      {
        name: "description",
        content:
          "A modern, no-Tailwind React component library built with Vanilla Extract and Base UI. Accessible, headless primitives with shadcn-style ergonomics.",
      },
      {
        name: "keywords",
        content:
          "vanilla-extract, base-ui, react, react-components, component-library, ui-kit, design-system, no-tailwind, shadcn, modern, typescript, zustand, ui-components, headless-ui, accessible-components",
      },
      {
        name: "author",
        content: "Blenx UI",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Blenx UI",
      },
      {
        property: "og:title",
        content: "Blenx UI — Modern React Component Library",
      },
      {
        property: "og:description",
        content:
          "Built with Vanilla Extract and Base UI. Accessible, headless primitives with shadcn-style ergonomics.",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Blenx UI — Modern React Component Library",
      },
      {
        name: "twitter:description",
        content:
          "Built with Vanilla Extract and Base UI. Accessible, headless primitives with shadcn-style ergonomics.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://blenx-ui.vercel.app/",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=DM+Mono&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  const { queryClient } = Route.useRouteContext();

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <meta property="og:image" content="https://blenx-ui.vercel.app/og" />
        <meta name="twitter:image" content="https://blenx-ui.vercel.app/og" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Blenx UI",
              url: "https://blenx-ui.vercel.app",
              description:
                "A modern, no-Tailwind React component library built with Vanilla Extract and Base UI.",
              applicationCategory: "Component Library",
              keywords:
                "vanilla-extract, base-ui, react, component-library, ui-kit, design-system, shadcn",
            }),
          }}
        />
      </head>
      <body>
        <ClientOnly>
          <ThemeEffect />
        </ClientOnly>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Container size={"3xl"} render={<main />} px={"md"} color="secondary">
            <Outlet />
          </Container>
        </QueryClientProvider>
        {!import.meta.dev ? <Analytics /> : null}
        <Scripts />
      </body>
    </html>
  );
}
