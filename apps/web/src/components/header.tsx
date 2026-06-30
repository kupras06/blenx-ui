import { ListIcon, MoonIcon, SunIcon, XIcon } from "@phosphor-icons/react";
import { ClientOnly, Link, useLocation } from "@tanstack/react-router";
import { useMediaQuery, useLocalStorage } from "@uidotdev/usehooks";
import { GITHUB_URL } from "@/constants";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { Button, HStack, IconButton } from "@blenx-dev/core";
import { darkClass, lightClass, tokenThemeClass } from "@/lib/app-theme.css";
import { useEffect } from "react";

function DocsRouteOption() {
  const { pathname } = useLocation();
  const isDocsActive = pathname.startsWith("/docs");
  const isBlocksActive = pathname.startsWith("/docs/blocks");
  const showBlocks = isDocsActive ? !isBlocksActive : false;
  return (
    <Button
      size="xs"
      variant={"ghost"}
      nativeButton={false}
      render={
        showBlocks ? (
          <Link
            to="/docs/blocks/$group/$variant"
            params={{
              group: "dashboard",
              variant: "dashboard-01",
            }}
          />
        ) : (
          <Link to="/docs" />
        )
      }
    >
      {showBlocks ? "Blocks" : "Docs"}
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
export function ThemeEffect() {
  return (
    <ClientOnly>
      <ThemeInner />
    </ClientOnly>
  );
}
function ThemeInner() {
  const [storedTheme] = useLocalStorage<"light" | "dark">("blenx-theme", "light");
  useEffect(() => {
    const themeClass = storedTheme === "light" ? lightClass : darkClass;
    document.documentElement.classList.remove(lightClass, darkClass);
    document.documentElement.classList.add(tokenThemeClass, themeClass);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, [storedTheme]);

  return null;
}
function ThemeToggle() {
  const [storedTheme, setStoredTheme] = useLocalStorage<"light" | "dark">("blenx-theme", "light");

  const handleToggle = () => {
    const next = storedTheme === "dark" ? "light" : "dark";
    const nextTheme = next === "light" ? lightClass : darkClass;
    document.documentElement.classList.remove(lightClass, darkClass);
    document.documentElement.classList.add(tokenThemeClass, nextTheme);
    document.documentElement.setAttribute("data-theme", next);
    setStoredTheme(next);
  };
  return (
    <IconButton
      variant="ghost"
      onClick={handleToggle}
      aria-label={`Switch to ${storedTheme === "light" ? "dark" : "light"} mode`}
    >
      {storedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
function BrandLogo({ size = 48 }: { size?: number }) {
  const scale = size / 74;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 470 80"
      width={470 * scale}
      height={80 * scale}
      fill="currentColor"
    >
      <rect x={0} y={0} width={20} height={34} rx={5} />
      <rect x={0} y={38} width={20} height={34} rx={5} />
      <rect x={28} y={0} width={50} height={34} rx={10} />
      <rect x={28} y={38} width={50} height={34} rx={10} />

      <text x={81} y={69} fontWeight={800} fontSize={92}>
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
  return (
    <HStack align="center" justify="between" py="xs">
      <HStack align="center" justify="between" gap="xxs" paddingLeft="none">
        <ClientOnly>{isDocsActive && <DocsRouteSidebarOption />}</ClientOnly>
        <Link to="/">
          <BrandLogo size={30} />
        </Link>
      </HStack>
      <HStack align="center" gap="xs">
        <ClientOnly>
          <DocsRouteOption />
          <Button size="xs" variant="ghost" nativeButton={false} render={<Link to="/blog" />}>
            Blog
          </Button>
          <ThemeToggle />
        </ClientOnly>

        {!isDocsActive && !isBlocksActive && (
          <Button
            size="xs"
            nativeButton={false}
            variant="link"
            render={
              <a
                href={GITHUB_URL}
                target="_blank"
                aria-label="Project Github URL"
                rel="noopener noreferrer"
              />
            }
          >
            GitHub &rarr;
          </Button>
        )}
      </HStack>
    </HStack>
  );
}

export { Header };
