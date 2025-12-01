"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface ColorPickerProps {
  selectedColor: string;
  onSelect: (color: string) => void;
}

export function ColorPicker({ selectedColor, onSelect }: ColorPickerProps) {
  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#00FF00" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Silver", hex: "#C0C0C0" },
  ];

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <Label>Choose Color</Label>
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <Button
            key={c.hex}
            variant={selectedColor === c.hex ? "default" : "outline"}
            style={{ backgroundColor: c.hex, color: "#fff" }}
            onClick={() => onSelect(c.hex)}
          >
            {c.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
