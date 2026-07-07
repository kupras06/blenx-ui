# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Tabs/tabs.css.ts`
  Problem: Tabs are well-structured, but several variants rely on subtle color changes that can understate the selected tab.
  Why it matters: Tabs need a clear current-location signal, especially when they control major page sections or filtered content.
  Recommended improvement: Make the selected state more visually assertive and keep the focus treatment aligned across underline, segmented, and vertical modes.
