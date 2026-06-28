import { ListIcon, MoonIcon, SunIcon, XIcon } from "@phosphor-icons/react";
import { ClientOnly, Link, useLocation } from "@tanstack/react-router";
import { useMediaQuery, useLocalStorage } from "@uidotdev/usehooks";
import { GITHUB_URL } from "@/constants";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { Button, HStack, IconButton } from "@blenx-dev/ui";
import { darkTheme, lightTheme } from "@/lib/app-theme.css";
import { useEffect } from "react";

function DocsRouteOption() {
  const { pathname } = useLocation();
  const isBlocksActive = pathname.startsWith("/docs/blocks");
  return (
    <Button
      size="xs"
      variant={"ghost"}
      nativeButton={false}
      render={
        isBlocksActive ? (
          <Link to="/docs" />
        ) : (
          <Link
            to="/docs/blocks/$group/$variant"
            params={{
              group: "dashboard",
              variant: "dashboard-01",
            }}
          />
        )
      }
    >
      {isBlocksActive ? "Docs" : "Blocs"}
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
    const next = storedTheme === "dark" ? "light" : "dark";
    const nextTheme = next === "light" ? lightTheme : darkTheme;
    document.documentElement.classList.remove(lightTheme, darkTheme);
    document.documentElement.classList.add(nextTheme);
    document.documentElement.setAttribute("data-theme", next);
  }, [storedTheme]);

  return null;
}
function ThemeToggle() {
  const [storedTheme, setStoredTheme] = useLocalStorage<"light" | "dark">("blenx-theme", "light");

  const handleToggle = () => {
    const next = storedTheme === "dark" ? "light" : "dark";
    const nextTheme = next === "light" ? lightTheme : darkTheme;
    document.documentElement.classList.remove(lightTheme, darkTheme);
    document.documentElement.classList.add(nextTheme);
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
