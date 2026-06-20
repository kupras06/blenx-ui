import { ListIcon, MoonIcon, SunIcon, XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { ClientOnly, Link, useLocation } from "@tanstack/react-router";
import { useMediaQuery, useLocalStorage } from "@uidotdev/usehooks";
import { GITHUB_URL } from "@/constants";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { fontSize, letterSpacing, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { Button, Container, HStack, IconButton, Separator } from "@blenx-dev/ui/components";
import { darkTheme, lightTheme } from "@/lib/app-theme.stylex";
import { useEffect } from "react";

const styles = stylex.create({
  logo: {
    textDecoration: "none",
    color: theme.contentPrimary,
    fontWeight: 700,
    fontSize: fontSize.large,
    letterSpacing: letterSpacing.tight,
    lineHeight: 1,
  },
  link: {
    textDecoration: "none",
    color: theme.contentSecondary,
    lineHeight: 1,
    paddingBlock: spacing["1"],
    fontSize: fontSize.small,
  },
  activeLink: {
    color: theme.contentPrimary,
    fontWeight: 600,
  },
});
function DocsRouteOption() {
  const { pathname } = useLocation();
  const isDocsActive = pathname.startsWith("/docs");
  return (
    <Button
      size="xsmall"
      variant={isDocsActive ? "soft" : "ghost"}
      nativeButton={false}
      render={<Link to="/docs" />}
    >
      Docs
    </Button>
  );
}
function BlocksRouteOption() {
  const { pathname } = useLocation();
  const isBlocksActive = pathname.startsWith("/blocks");
  return (
    <Button
      size="xsmall"
      variant={isBlocksActive ? "soft" : "ghost"}
      render={<Link to="/docs/blocks" />}
      nativeButton={false}
    >
      Blocks
    </Button>
  );
}
function DocsRouteSidebarOption() {
  const sidebarOpen = useSidebarStore((st) => st.isOpen);
  const setOpen = useSidebarStore((st) => st.setOpen);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  if (isSmallDevice)
    return (
      <IconButton variant="ghost" onClick={() => setOpen(!sidebarOpen)} aria-label="Toggle sidebar">
        {sidebarOpen ? <XIcon /> : <ListIcon />}
      </IconButton>
    );
}
const lightThemeClass = stylex.props(lightTheme).className || "";
const darkThemeClass = stylex.props(darkTheme).className || "";
export function ThemeEffect() {
  const [themeMode] = useLocalStorage("Blenx-Theme", "light");

  useEffect(() => {
    document.documentElement.classList.remove(
      ...lightThemeClass.split(" "),
      ...darkThemeClass.split(" "),
    );
    document.documentElement.classList.add(
      ...(themeMode === "dark" ? darkThemeClass : lightThemeClass).split(" "),
    );
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return null;
}
function ThemeToggle() {
  const [themeMode, setThemeMode] = useLocalStorage("Blenx-Theme", "light");

  const updateDocumentTheme = (nextTheme: "light" | "dark") => {
    document.documentElement.classList.remove(
      ...lightThemeClass.split(" "),
      ...darkThemeClass.split(" "),
    );
    if (nextTheme === "light") {
      document.documentElement.classList.add(...lightThemeClass.split(" "));
    } else {
      document.documentElement.classList.add(...darkThemeClass.split(" "));
    }
    document.documentElement.setAttribute("data-theme", nextTheme);
  };
  const handleToggle = () => {
    const previousTheme = themeMode;
    const nextTheme = previousTheme === "light" ? "dark" : "light";
    setThemeMode(nextTheme);
    document.startViewTransition(() => {
      updateDocumentTheme(nextTheme);
    });
  };
  return (
    <IconButton
      variant="ghost"
      onClick={handleToggle}
      aria-label={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
    >
      {themeMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
function BrandLogo({ size = 48 }: { size?: number }) {
  const scale = size / 74;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 390 70"
      width={390 * scale}
      height={70 * scale}
      fill="currentColor"
    >
      <rect x={0} y={0} width={20} height={34} rx={5} />
      <rect x={0} y={38} width={20} height={34} rx={5} />
      <rect x={28} y={0} width={50} height={34} rx={10} />
      <rect x={28} y={38} width={50} height={34} rx={10} />

      <text x={84} y={69} fontWeight={800} fontSize={92}>
        Blenx
        <tspan fontWeight={300} opacity={0.5}>
          UI
        </tspan>
      </text>
    </svg>
  );
}
function Header() {
  const { pathname } = useLocation();
  const isDocsActive = pathname.startsWith("/docs");
  const isBlocksActive = pathname.startsWith("/blocks");
  const isHomeActive = pathname === "/";
  return (
    <>
      <Container size="3xl" paddingY="none" paddingX="xxsmall">
        <HStack align="center" justify="between" paddingY="xsmall">
          <HStack align="center" justify="between" gap="xxsmall" paddingLeft="none">
            <ClientOnly>{isDocsActive && <DocsRouteSidebarOption />}</ClientOnly>
            <Link to="/" {...stylex.props(styles.logo, isHomeActive && styles.activeLink)}>
              <BrandLogo size={30} />
            </Link>
          </HStack>
          <HStack align="center" gap="xsmall">
            <ClientOnly>
              {!isDocsActive && <DocsRouteOption />}
              {isDocsActive && <BlocksRouteOption />}
              <ThemeToggle />
            </ClientOnly>

            {!isDocsActive && !isBlocksActive && (
              <Button
                size="xsmall"
                nativeButton={false}
                variant="link"
                render={
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    aria-label="Project Github URL"
                    rel="noopener noreferrer"
                    {...stylex.props(styles.link)}
                  />
                }
              >
                GitHub &rarr;
              </Button>
            )}
          </HStack>
        </HStack>
      </Container>
      <Separator />
    </>
  );
}

export { Header };
