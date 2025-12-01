"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface AccessoriesChecklistProps {
  selectedAccessories: Set<string>;
  onToggle: (accessory: string) => void;
}

export function AccessoriesChecklist({ selectedAccessories, onToggle }: AccessoriesChecklistProps) {
  const accessories = [
    "top-box",
    "crash-guards",
    "led-lights",
  ];

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <Label>Accessories</Label>
      {accessories.map((a) => (
        <div key={a} className="flex items-center gap-2">
          <Checkbox
            id={a}
            checked={selectedAccessories.has(a)}
            onCheckedChange={() => onToggle(a)}
          />
          <Label htmlFor={a}>{a.replace(/-/g, " ")}</Label>
        </div>
      ))}
    </div>
  );
}
