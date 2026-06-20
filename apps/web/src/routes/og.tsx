import { ImageResponse } from "@vercel/og";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/og")({
  server: {
    handlers: {
      GET: async () =>
        new ImageResponse(
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              background: "#111827",
              color: "white",
              padding: 64,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 72, fontWeight: 700 }}>Blenx UI</div>

            <div style={{ fontSize: 32, marginTop: 24 }}>
              React Component Library powered by StyleX & Base UI
            </div>
          </div>,
          {
            width: 1200,
            height: 630,
          },
        ),
    },
  },
});
