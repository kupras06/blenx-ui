import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { fontSize } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import type { Column } from "@blenx-dev/ui/components/Table/table";
import {
  Box,
  Container,
  HStack,
  Separator,
  Surface,
  Table,
  Text,
  VStack,
} from "@blenx-dev/ui/components";
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
    blenx: "StyleX — type-safe, zero-runtime",
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
  { label: "StyleX", value: "Native" },
];

/* ---------------------------------------------------------------------------
 * Styles
 * ------------------------------------------------------------------------- */

const styles = stylex.create({
  sectionTitle: {
    fontSize: fontSize.display,
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  centeredBox: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

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
    <Container size="3xl" paddingX="medium" paddingY="massive">
      <VStack gap="xxxlarge">
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
        <VStack gap="large">
          <VStack gap="small" align="center">
            <Text variant="h2" align="center" style={styles.sectionTitle}>
              How we compare
            </Text>
            <Box maxWidth={560} style={styles.centeredBox}>
              <Text variant="body2" color="secondary" align="center" size="large">
                See how Blenx compares to traditional UI libraries.
              </Text>
            </Box>
          </VStack>
          <Container content="center" maxWidth="lg" overflow="auto">
            <Table columnData={comparisonColumns} rowData={comparisonRows} rowKey="feature" />
          </Container>
        </VStack>

        <Separator tone="subtle" />

        {/* ─── Social Proof ──────────────────────────────────────────── */}
        <HStack gap="medium" justify="center" wrap>
          {metrics.map((metric) => (
            <Surface key={metric.label} variant="raised" paddingY="small" paddingX="medium">
              <HStack gap="xsmall" align="center">
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
    </Container>
  );
}
