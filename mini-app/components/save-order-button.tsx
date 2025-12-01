"use client";

import { Button } from "@/components/ui/button";

export interface SaveOrderButtonProps {
  onSave: () => void;
}

export function SaveOrderButton({ onSave }: SaveOrderButtonProps) {
  return (
    <Button onClick={onSave} className="mt-4">
      Save Order
    </Button>
  );
}
