# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/ScrollArea/scroll-area.css.ts`
  Problem: ScrollArea is a useful primitive, but its visual defaults are subtle enough that users may not realize content is scrollable.
  Why it matters: Hidden overflow can be a discoverability problem when the scroll container is also a surface or panel.
  Recommended improvement: Add clearer scrollbar affordance guidance and document when scroll fading should be enabled or suppressed.
