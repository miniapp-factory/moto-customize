"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface DecalLibraryProps {
  selectedDecals: string[];
  onAddDecal: (decal: string) => void;
}

export function DecalLibrary({ selectedDecals, onAddDecal }: DecalLibraryProps) {
  const decals = [
    "racing-stripes",
    "flame-design",
    "tribal-pattern",
  ];

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <Label>Decal Library</Label>
      <div className="flex flex-wrap gap-2">
        {decals.map((d) => (
          <div key={d} className="flex items-center gap-2">
            <Checkbox
              id={d}
              checked={selectedDecals.includes(d)}
              onCheckedChange={() => onAddDecal(d)}
            />
            <Label htmlFor={d}>{d.replace(/-/g, " ")}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
