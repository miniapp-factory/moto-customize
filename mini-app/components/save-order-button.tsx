"use client";

import { Button } from "@/components/ui/button";

export interface SaveOrderButtonProps {
  onSave: () => void;
}

export function SaveOrderButton({ onSave }: SaveOrderButtonProps) {
  return (
    <Button
      onClick={() => {
        alert("Order submitted!");
        onSave();
      }}
      className="mt-4"
    >
      Submit Order
    </Button>
  );
}
