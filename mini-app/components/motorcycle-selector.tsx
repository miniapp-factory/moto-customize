"use client";

import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export interface MotorcycleSelectorProps {
  selectedModel: string;
  onSelect: (model: string) => void;
}

export function MotorcycleSelector({ selectedModel, onSelect }: MotorcycleSelectorProps) {
  const models = [
    { value: "honda-click", label: "Honda Click" },
    { value: "yamaha-aerox", label: "Yamaha Aerox" },
    { value: "suzuki-raider", label: "Suzuki Raider" },
    { value: "kawasaki-ninja", label: "Kawasaki Ninja" },
    { value: "honda-cbr", label: "Honda CBR" },
  ];

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <Label htmlFor="motorcycle-select">Select Motorcycle</Label>
      <Select value={selectedModel} onValueChange={onSelect}>
        <SelectTrigger id="motorcycle-select">
          <SelectValue placeholder="Choose a model" />
        </SelectTrigger>
        <SelectContent>
          {models.map((m) => (
            <SelectItem key={m.value} value={m.value}>
              {m.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
