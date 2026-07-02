interface ExpandedCommand {
  label: string;
  command: string;
}

interface PkgManager {
  label: string;
  runner: string;
}

const pkgManagers: PkgManager[] = [
  { label: "npm", runner: "npx" },
  { label: "pnpm", runner: "pnpm dlx" },
  { label: "yarn", runner: "yarn dlx" },
  { label: "bun", runner: "bunx" },
];

function matchRunner(cmd: string): string | null {
  for (const pm of pkgManagers) {
    const pattern = new RegExp(`^${escapeRegex(pm.runner)}\\s+`);
    if (pattern.test(cmd)) {
      return pm.runner;
    }
  }
  return null;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function expandRunnerCommands(cmd: string): string {
  const matchedRunner = matchRunner(cmd);
  if (!matchedRunner) return cmd;

  const rest = cmd.slice(matchedRunner.length).trimStart();
  return pkgManagers.map((pm) => `${pm.runner} ${rest}`).join("\n");
}

function expandRunnerCommandsToArray(cmd: string): ExpandedCommand[] {
  const matchedRunner = matchRunner(cmd);
  if (!matchedRunner) return [{ label: "", command: cmd }];

  const rest = cmd.slice(matchedRunner.length).trimStart();
  return pkgManagers.map((pm) => ({
    label: pm.label,
    command: `${pm.runner} ${rest}`,
  }));
}

export { expandRunnerCommands, expandRunnerCommandsToArray };
export type { ExpandedCommand };
