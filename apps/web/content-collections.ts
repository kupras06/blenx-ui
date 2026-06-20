import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const GuideSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum([
    "Getting Started",
    "Guides",
    "Customization",
    "Advanced",
  ]),
  order: z.number().default(999),
  keywords: z.array(z.string()).default([]),
  status: z.enum(["draft", "stable", "deprecated"]).default("stable"),
});

const ComponentMetaSchema = z.object({
  component: z.string().optional().default(""),
  title: z.string().optional().default(""),
  description: z.string().optional().default(""),
  order: z.number().default(999),
  status: z.enum(["alpha", "beta", "stable", "deprecated"]).optional().default("stable"),
  keywords: z.array(z.string()).default([]),
  category: z.enum([
    "layout",
    "form",
    "data-display",
    "feedback",
    "overlay",
    "navigation",
    "media",
    "typography",
    "primitives",
  ]).optional().default("primitives"),
});

const BlockMetaSchema = z.object({
  name: z.string().optional().default(""),
  title: z.string().optional().default(""),
  description: z.string().optional().default(""),
  category: z.string().optional().default(""),
  status: z.enum(["alpha", "beta", "stable", "deprecated"]).optional().default("stable"),
  keywords: z.array(z.string()).default([]),
  order: z.number().default(999),
});

const components = defineCollection({
  name: "components",
  directory: "content/components",
  include: "**/*.{md,mdx}",
  schema: ComponentMetaSchema,
  transform: async (document, context) => ({
    ...document,
    mdx: await compileMDX(context, document),
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
  }),
});

export default defineConfig({
  content: [components, blocks, guides],
});