import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as stylex from "@stylexjs/stylex";
import { Header } from "@/components/header";
import { theme } from "@/lib/theme/theme.stylex";

import appCss from "../styles.css?url";
import { appTheme } from "@/theme.stylex";

export interface RouterAppContext { }

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Blenx UI",
      },
    ],
    links: [
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
    ],
  }),

  component: RootDocument,
});

const rootStyles = stylex.create({
  body: {
    backgroundColor: theme.background,
    color: theme.contentPrimary,
    margin: 0,
  },
});

function RootDocument() {
  return (
    <html lang="en" {...stylex.props(appTheme)}>
      <head>
        <HeadContent />
      </head>
      <body {...stylex.props(rootStyles.body)}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Outlet />
          </main>
        </div>
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
