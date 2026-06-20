export const componentTokenMap: Record<string, Array<{ token: string; label: string }>> = {
  Button: [
    { token: "primary", label: "Primary" },
    { token: "primarySubtle", label: "Primary Subtle" },
    { token: "contentOnPrimary", label: "Content On Primary" },
    { token: "border", label: "Border" },
    { token: "borderRadius", label: "Border Radius" },
    { token: "fontSize", label: "Font Size" },
    { token: "contentPrimary", label: "Content Primary" },
    { token: "background", label: "Background" },
    { token: "backgroundSubtle", label: "Background Subtle" },
    { token: "sentimentNegative", label: "Sentiment Negative" },
    { token: "sentimentNegativeSubtle", label: "Sentiment Negative Subtle" },
  ],
  Card: [
    { token: "surface", label: "Surface" },
    { token: "border", label: "Border" },
    { token: "borderRadius", label: "Border Radius" },
    { token: "contentPrimary", label: "Content Primary" },
    { token: "contentSecondary", label: "Content Secondary" },
  ],
  Badge: [
    { token: "primary", label: "Primary" },
    { token: "contentOnPrimary", label: "Content On Primary" },
    { token: "borderRadius", label: "Border Radius" },
  ],
  Avatar: [
    { token: "primary", label: "Primary" },
    { token: "contentOnPrimary", label: "Content On Primary" },
    { token: "borderRadius", label: "Border Radius" },
  ],
  Dialog: [
    { token: "surface", label: "Surface" },
    { token: "border", label: "Border" },
    { token: "borderRadius", label: "Border Radius" },
    { token: "contentPrimary", label: "Content Primary" },
    { token: "contentSecondary", label: "Content Secondary" },
    { token: "surfaceOverlay", label: "Surface Overlay" },
  ],
  Input: [
    { token: "surface", label: "Surface" },
    { token: "border", label: "Border" },
    { token: "borderRadius", label: "Border Radius" },
    { token: "fontSize", label: "Font Size" },
    { token: "contentPrimary", label: "Content Primary" },
    { token: "contentSecondary", label: "Content Secondary" },
    { token: "focusRing", label: "Focus Ring" },
  ],
  Select: [
    { token: "surface", label: "Surface" },
    { token: "border", label: "Border" },
    { token: "borderRadius", label: "Border Radius" },
    { token: "contentPrimary", label: "Content Primary" },
    { token: "focusRing", label: "Focus Ring" },
  ],
  Breadcrumbs: [
    { token: "contentPrimary", label: "Content Primary" },
    { token: "contentSecondary", label: "Content Secondary" },
  ],
  Switch: [
    { token: "primary", label: "Primary" },
    { token: "surface", label: "Surface" },
    { token: "border", label: "Border" },
  ],
  Text: [
    { token: "contentPrimary", label: "Content Primary" },
    { token: "contentSecondary", label: "Content Secondary" },
    { token: "contentDisabled", label: "Content Disabled" },
    { token: "fontSize", label: "Font Size" },
  ],
  Surface: [
    { token: "surface", label: "Surface" },
    { token: "border", label: "Border" },
    { token: "borderRadius", label: "Border Radius" },
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
