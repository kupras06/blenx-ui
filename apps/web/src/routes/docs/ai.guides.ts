import { createFileRoute } from "@tanstack/react-router";
import { guideMarkdown } from "@/lib/ai/guide-content";

export const Route = createFileRoute("/docs/ai/guides")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(guideMarkdown, {
          headers: { "Content-Type": "text/markdown; charset=utf-8" },
        });
      },
    },
  },
});
