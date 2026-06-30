export const componentTokenMap: Record<string, Array<{ token: string; label: string }>> = {
  Button: [
    { token: "interactive.primary", label: "Primary" },
    { token: "interactive.primaryBg", label: "Primary Bg" },
    { token: "text.primary", label: "Text Primary" },
    { token: "border.default", label: "Border" },
    { token: "background.default", label: "Background" },
    { token: "background.subtle", label: "Background Subtle" },
    { token: "status.danger", label: "Danger" },
    { token: "status.dangerBg", label: "Danger Bg" },
  ],
  Card: [
    { token: "surface.default", label: "Surface" },
    { token: "border.default", label: "Border" },
    { token: "text.primary", label: "Text Primary" },
    { token: "text.secondary", label: "Text Secondary" },
  ],
  Badge: [
    { token: "interactive.primary", label: "Primary" },
    { token: "interactive.primaryFg", label: "Primary Fg" },
  ],
  Avatar: [
    { token: "interactive.primary", label: "Primary" },
    { token: "interactive.primaryFg", label: "Primary Fg" },
  ],
  Dialog: [
    { token: "surface.default", label: "Surface" },
    { token: "border.default", label: "Border" },
    { token: "text.primary", label: "Text Primary" },
    { token: "text.secondary", label: "Text Secondary" },
    { token: "surface.overlay", label: "Overlay" },
  ],
  Input: [
    { token: "surface.default", label: "Surface" },
    { token: "border.default", label: "Border" },
    { token: "text.primary", label: "Text Primary" },
    { token: "text.secondary", label: "Text Secondary" },
    { token: "focus.ring", label: "Focus Ring" },
  ],
  Select: [
    { token: "surface.default", label: "Surface" },
    { token: "border.default", label: "Border" },
    { token: "text.primary", label: "Text Primary" },
    { token: "focus.ring", label: "Focus Ring" },
  ],
  Breadcrumbs: [
    { token: "text.primary", label: "Text Primary" },
    { token: "text.secondary", label: "Text Secondary" },
  ],
  Switch: [
    { token: "interactive.primary", label: "Primary" },
    { token: "surface.default", label: "Surface" },
    { token: "border.default", label: "Border" },
  ],
  Text: [
    { token: "text.primary", label: "Text Primary" },
    { token: "text.secondary", label: "Text Secondary" },
    { token: "text.disabled", label: "Text Disabled" },
  ],
  Surface: [
    { token: "surface.default", label: "Surface" },
    { token: "border.default", label: "Border" },
  ],
};

export const componentNames = Object.keys(componentTokenMap);

export function getTokensForComponent(name: string): string[] {
  return componentTokenMap[name]?.map((t) => t.token) ?? [];
}

export function getComponentsForToken(token: string): string[] {
  const result: string[] = [];
  for (const [comp, tokens] of Object.entries(componentTokenMap)) {
    if (tokens.some((t) => t.token === token)) {
      result.push(comp);
    }
  }
  return result;
}
