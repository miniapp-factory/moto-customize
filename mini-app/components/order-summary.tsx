"use client";

import { Label } from "@/components/ui/label";

export interface OrderSummaryProps {
  model: string;
  color: string;
  decals: string[];
  accessories: Set<string>;
  name: string;
  contact: string;
}

export function OrderSummary({ model, color, decals, accessories, name, contact }: OrderSummaryProps) {

  return (
    <div className="border p-4 rounded w-full max-w-sm">
      <Label>Order Summary</Label>
      <p>Model: {model || "None"}</p>
      <p>
        Color: {color || "None"}{" "}
        {color && (
          <span
            style={{
              backgroundColor: color,
              width: 16,
              height: 16,
              display: "inline-block",
              marginLeft: 4,
              borderRadius: 2,
            }}
          />
        )}
      </p>
      <p>
        Decals: {decals.length > 0 ? decals.join(", ") : "None"}
      </p>
      <p>
        Accessories:{" "}
        {accessories.size > 0 ? Array.from(accessories).join(", ") : "None"}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border rounded p-2"
        />
      </div>
    </div>
  );
}
