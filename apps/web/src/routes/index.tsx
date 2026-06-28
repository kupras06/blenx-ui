import { createFileRoute } from "@tanstack/react-router";
import type { Column } from "@blenx-dev/ui/components/Table/table";
import { Container, HStack, Separator, Surface, Table, Text, VStack } from "@blenx-dev/ui";
import { ShowCaseComponents } from "@/views/landing/ShowCasing";
import { LandingHero } from "@/views/landing/LandingHero";
import { BlenxFeatures, InstallSection } from "@/views/landing/FeaturesSection";
import { LandingPageDocumentation } from "@/views/landing/LandingPageDocumentation";
import { LandingPageCTA } from "@/views/landing/LandingPageCTAs";

/* ---------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */

interface ComparisonRow {
  feature: string;
  blenx: string;
  traditional: string;
}

const comparisonColumns: Column<ComparisonRow>[] = [
  { key: "feature", header: "Feature" },
  { key: "blenx", header: "Blenx" },
  {
    key: "traditional" as keyof ComparisonRow,
    header: "Traditional UI Libraries",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Own source code",
    blenx: "Copied directly to your project",
    traditional: "Locked in node_modules",
  },
  {
    feature: "Install model",
    blenx: "Registry — add only what you need",
    traditional: "npm install — whole library",
  },
  {
    feature: "Styling",
    blenx: "Vanilla Extract — type-safe, zero-runtime CSS",
    traditional: "Tailwind, styled-components, or CSS modules",
  },
  {
    feature: "Accessibility",
    blenx: "Base UI primitives (WAI-ARIA)",
    traditional: "Custom or third-party abstractions",
  },
  {
    feature: "Customization",
    blenx: "Full — edit source directly",
    traditional: "Theme overrides, config files, !important",
  },
  {
    feature: "Vendor lock-in",
    blenx: "None — you own the code",
    traditional: "Tied to library API and roadmap",
  },
];

const metrics = [
  { label: "Components", value: "20+" },
  { label: "TypeScript", value: "100%" },
  { label: "Base UI", value: "Powered" },
  { label: "Registry", value: "First" },
  { label: "Vanilla Extract", value: "Native" },
];

/* ---------------------------------------------------------------------------
 * Route
 * ------------------------------------------------------------------------- */

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

/* ---------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

function HomeComponent() {
  return (
    <VStack gap="xxxl" paddingX="md" paddingY="massive">
      <LandingHero />

      <Separator tone="subtle" />
      <ShowCaseComponents />
      <Separator tone="subtle" />
      <InstallSection />

      {/* ─── Component Showcase ────────────────────────────────────── */}

      <Separator tone="subtle" />

      {/* ─── Why Blenx ─────────────────────────────────────────────── */}
      <BlenxFeatures />

      <Separator tone="subtle" />

      {/* ─── Comparison ────────────────────────────────────────────── */}
      <VStack gap="lg">
        <VStack gap="sm" align="center">
          <Text variant="h2" align="center" size="xxl">
            How we compare
          </Text>
          <Container maxWidth={560} centered>
            <Text variant="body2" color="secondary" align="center" size="lg">
              See how Blenx compares to traditional UI libraries.
            </Text>
          </Container>
        </VStack>
        <Container content="center" maxWidth="lg" overflow="auto">
          <Table columnData={comparisonColumns} rowData={comparisonRows} rowKey="feature" />
        </Container>
      </VStack>

      <Separator tone="subtle" />

      {/* ─── Social Proof ──────────────────────────────────────────── */}
      <HStack gap="md" justify="center" wrap>
        {metrics.map((metric) => (
          <Surface key={metric.label} variant="raised" paddingY="sm" paddingX="md">
            <HStack gap="xs" align="center">
              <Text variant="body2" weight="semibold">
                {metric.value}
              </Text>
              <Text variant="body3" color="secondary">
                {metric.label}
              </Text>
            </HStack>
          </Surface>
        ))}
      </HStack>

      <Separator tone="subtle" />

      {/* ─── Documentation ─────────────────────────────────────────── */}
      <LandingPageDocumentation />

      <Separator tone="subtle" />

      {/* ─── Final CTA ─────────────────────────────────────────────── */}
      <LandingPageCTA />
    </VStack>
  );
}
