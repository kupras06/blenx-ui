import { defineCollection, defineConfig } from "@content-collections/core";
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
  status: z.enum([
    "draft",
    "stable",
    "deprecated",
  ]).default("stable"),
});
const ComponentDocSchema = z.object({
  component: z.string(),

  title: z.string(),

  description: z.string(),

  order: z.number().default(999),

  status: z.enum([
    "alpha",
    "beta",
    "stable",
    "deprecated",
  ]),

  keywords: z.array(z.string()).default([]),
});

 const RegistryMetaSchema = z.object({
  name: z.string(),

  title: z.string(),

  description: z.string(),

  category: z.string(),

  status: z.enum([
    "alpha",
    "beta",
    "stable",
    "deprecated",
  ]),

  keywords: z.array(z.string()),

  dependencies: z.array(z.string()).default([]),

  related: z.array(z.string()).default([]),

  accessibility: z.object({
    keyboard: z.array(z.string()).default([]),
    screenReader: z.array(z.string()).default([]),
  }),

  props: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      default: z.string().optional(),
      required: z.boolean().default(false),
      description: z.string(),
    }),
  ),

  examples: z.array(
    z.object({
      name: z.string(),
      title: z.string(),
    }),
  ),
});
const blocks = defineCollection({
  name: "blocks",
  directory: "content/blocks",
  include: "**/*.{md,mdx}",
  schema: RegistryMetaSchema,
});

const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    content: z.string(),
  }),
});
import { compileMDX } from "@content-collections/mdx";

const components = defineCollection({
  name: "components",
  directory: "content/components",
  include: "**/*.md",
  schema: z.object({
  content: z.string(),
  }),
  
transform: async (document, context) => ({
  ...document,
  mdx: await compileMDX(context, document),
})
});
const guides = defineCollection({
  name: "guides",
  directory: "content/guides",
  include: "**/*.md",
  schema: GuideSchema
});
export default defineConfig({
  content: [docs,guides,blocks,components],
});