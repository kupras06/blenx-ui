import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import { extractHeadings } from "./src/utils/extractHeadings";

const NavigationMeta = z.object({
  group: z.enum(["components", "guides", "blocks"]),
  order: z.number(),
  link: z.string().optional(),
});

const GuideSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(["Getting Started", "Guides", "Customization", "Advanced"]),
  keywords: z.array(z.string()).default([]),
  status: z.enum(["draft", "stable", "deprecated"]).default("stable"),
  content: z.string(),
  navigation: NavigationMeta,
});

const ComponentMetaSchema = z.object({
  component: z.string().optional().default(""),
  title: z.string().optional().default(""),
  description: z.string().optional().default(""),
  status: z.enum(["alpha", "beta", "stable", "deprecated"]).optional().default("stable"),
  keywords: z.array(z.string()).default([]),
  content: z.string(),
  category: z
    .enum([
      "layout",
      "form",
      "data-display",
      "feedback",
      "overlay",
      "navigation",
      "media",
      "typography",
      "primitives",
    ])
    .optional()
    .default("primitives"),
  navigation: NavigationMeta,
});

const BlockMetaSchema = z.object({
  title: z.string(),
  group: z.enum([
    "application-states",
    "authentication",
    "dashboard",
    "marketing",
    "headers",
    "tables",
  ]),
  order: z.number(),
  default: z.boolean().default(false),
  name: z.string().optional().default(""),
  description: z.string().optional().default(""),
  category: z.string().optional().default(""),
  status: z.enum(["alpha", "beta", "stable", "deprecated"]).optional().default("stable"),
  keywords: z.array(z.string()).default([]),
  navigation: NavigationMeta.optional(),
  content: z.string(),
});

const BlockGroupSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

const TocItems = z.array(
  z.object({
    depth: z.number(),
    title: z.string(),
    slug: z.string(),
  }),
);

const blockGroups = defineCollection({
  name: "blockGroups",
  directory: "content/block-groups",
  include: "*.json",
  schema: z.any(),
  transform: async (document) => {
    const raw = JSON.parse(document.content);
    return BlockGroupSchema.parse(raw);
  },
});

const components = defineCollection({
  name: "components",
  directory: "content/components",
  include: "**/*.{md,mdx}",
  schema: ComponentMetaSchema,
  transform: async (document, context) => ({
    ...document,
    mdx: await compileMDX(context, document),
    toc: TocItems.parse(extractHeadings(document.content)),
  }),
});

const blocks = defineCollection({
  name: "blocks",
  directory: "content/blocks",
  include: "**/*.{md,mdx}",
  schema: BlockMetaSchema,
  transform: async (document, context) => ({
    ...document,
    mdx: await compileMDX(context, document),
    toc: TocItems.parse(extractHeadings(document.content)),
  }),
});

const guides = defineCollection({
  name: "guides",
  directory: "content/guides",
  include: "**/*.{md,mdx}",
  schema: GuideSchema,
  transform: async (document, context) => ({
    ...document,
    mdx: await compileMDX(context, document),
    toc: TocItems.parse(extractHeadings(document.content)),
  }),
});

export default defineConfig({
  content: [components, blockGroups, blocks, guides],
});
