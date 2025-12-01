import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { useState } from "react";
import { MotorcycleSelector } from "@/components/motorcycle-selector";
import { ColorPicker } from "@/components/color-picker";
import { DecalLibrary } from "@/components/decal-library";
import { AccessoriesChecklist } from "@/components/accessories-checklist";
import { OrderSummary } from "@/components/order-summary";
import { SaveOrderButton } from "@/components/save-order-button";

export { generateMetadata };

export default function Home() {
  const [model, setModel] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [decals, setDecals] = useState<string[]>([]);
  const [accessories, setAccessories] = useState<Set<string>>(new Set());

  const handleAddDecal = (decal: string) => {
    setDecals((prev) => (prev.includes(decal) ? prev : [...prev, decal]));
  };

  const handleToggleAccessory = (accessory: string) => {
    setAccessories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(accessory)) newSet.delete(accessory);
      else newSet.add(accessory);
      return newSet;
    });
  };

  const handleSave = () => {
    // Placeholder for save logic
    console.log("Order saved:", { model, color, decals, accessories: Array.from(accessories) });
  };

  return (
    <main className="flex flex-col gap-4 place-items-center place-content-center px-4 grow">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-muted-foreground">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="flex flex-col gap-4">
          <MotorcycleSelector selectedModel={model} onSelect={setModel} />
          <ColorPicker selectedColor={color} onSelect={setColor} />
          <DecalLibrary selectedDecals={decals} onAddDecal={handleAddDecal} />
          <AccessoriesChecklist
            selectedAccessories={accessories}
            onToggle={handleToggleAccessory}
          />
          <SaveOrderButton onSave={handleSave} />
        </div>
        <OrderSummary
          model={model}
          color={color}
          decals={decals}
          accessories={accessories}
        />
      </div>
    </main>
  );
}
