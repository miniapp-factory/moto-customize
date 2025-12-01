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
      {selectedColor && (
        <div className="mt-2 flex items-center gap-2">
          <div
            style={{
              backgroundColor: selectedColor,
              width: 24,
              height: 24,
              borderRadius: 4,
            }}
          />
          <span>{colors.find((c) => c.hex === selectedColor)?.name}</span>
        </div>
      )}
    </div>
  );
}
