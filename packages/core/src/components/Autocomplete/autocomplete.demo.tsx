"use client";

import { useState } from "react";
import {
  Autocomplete,
  AutocompleteInput,
  AutocompletePopup,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteEmpty,
  useAutocompleteFilter,
} from "./autocomplete";
import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Papaya",
  "Strawberry",
  "Watermelon",
];

export function AutocompleteDemo() {
  const [value, setValue] = useState("");
  const filter = useAutocompleteFilter();
  const filtered = fruits.filter((fruit) => filter.contains(fruit, value));

  return (
    <VStack gap="md">
      <Text variant="h6">Fruit Autocomplete</Text>
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput showTrigger showClear placeholder="Search fruits…" />
        <AutocompletePopup>
          <AutocompleteList>
            {filtered.length === 0 && <AutocompleteEmpty>No fruits found</AutocompleteEmpty>}
            {filtered.map((fruit) => (
              <AutocompleteItem key={fruit} value={fruit}>
                {fruit}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: AutocompleteDemo }];
