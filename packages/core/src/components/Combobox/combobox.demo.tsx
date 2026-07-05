"use client";

import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopup,
  ComboboxItem,
  ComboboxList,
  ComboboxEmpty,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxFilter,
} from "./combobox";
import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";

const frameworks = [
  "React",
  "Vue",
  "Svelte",
  "Solid",
  "Angular",
  "Qwik",
  "Preact",
  "Alpine",
  "Ember",
  "Lit",
];

export function ComboboxSingle() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const filter = useComboboxFilter();
  const filtered = frameworks.filter((fw) => filter.contains(fw, search));

  return (
    <VStack gap="sm">
      <Text variant="h6">Single Select</Text>
      <Combobox value={selected} onValueChange={setSelected} onInputValueChange={setSearch}>
        <ComboboxInput showTrigger showClear placeholder="Pick a framework…" />
        <ComboboxPopup>
          <ComboboxList>
            {filtered.length === 0 && <ComboboxEmpty>No frameworks found</ComboboxEmpty>}
            {filtered.map((fw) => (
              <ComboboxItem key={fw} value={fw}>
                {fw}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      <Text variant="caption" color="secondary">
        Selected: {selected ?? "none"}
      </Text>
    </VStack>
  );
}

export function ComboboxMulti() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const filter = useComboboxFilter({ multiple: true, value: selected });
  const filtered = frameworks.filter((fw) => filter.contains(fw, search));

  return (
    <VStack gap="sm">
      <Text variant="h6">Multi Select with Chips</Text>
      <Combobox
        multiple
        value={selected}
        onValueChange={(val) => setSelected(val as string[])}
        onInputValueChange={setSearch}
      >
        <ComboboxChips>
          {selected.map((fw) => (
            <ComboboxChip key={fw}>{fw}</ComboboxChip>
          ))}
          <ComboboxChipsInput
            placeholder={selected.length === 0 ? "Pick frameworks…" : "Add more…"}
          />
        </ComboboxChips>
        <ComboboxPopup>
          <ComboboxList>
            {filtered.length === 0 && <ComboboxEmpty>No frameworks found</ComboboxEmpty>}
            {filtered.map((fw) => (
              <ComboboxItem key={fw} value={fw}>
                {fw}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    </VStack>
  );
}

export const demos = [
  { name: "Single", component: ComboboxSingle },
  { name: "Multi", component: ComboboxMulti },
];
