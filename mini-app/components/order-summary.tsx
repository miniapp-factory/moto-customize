"use client";

import { Label } from "@/components/ui/label";

export interface OrderSummaryProps {
  model: string;
  color: string;
  decals: string[];
  accessories: Set<string>;
}

export function OrderSummary({ model, color, decals, accessories }: OrderSummaryProps) {
  return (
    <div className="border p-4 rounded w-full max-w-sm">
      <Label>Order Summary</Label>
      <p>Model: {model || "None"}</p>
      <p>Color: {color || "None"}</p>
      <p>Decals: {decals.length > 0 ? decals.join(", ") : "None"}</p>
      <p>
        Accessories:{" "}
        {accessories.size > 0 ? Array.from(accessories).join(", ") : "None"}
      </p>
    </div>
  );
}
