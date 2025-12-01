"use client";
import { useEffect, useState } from "react";

export interface MotorcyclePixelProps {
  /** The currently selected color for the motorcycle body */
  selectedColor: string;
}

export default function MotorcyclePixel({ selectedColor }: MotorcyclePixelProps) {
  const rows = 15;
  const cols = 20;
  const totalCells = rows * cols;

  // Predefined indices for wheels and seat
  const wheelIndices = (() => {
    const indices: number[] = [];
    // Left wheel (3x3 block)
    for (let r = 12; r <= 14; r++) {
      for (let c = 5; c <= 7; c++) {
        indices.push(r * cols + c);
      }
    }
    // Right wheel (3x3 block)
    for (let r = 12; r <= 14; r++) {
      for (let c = 13; c <= 15; c++) {
        indices.push(r * cols + c);
      }
    }
    return indices;
  })();

  const seatIndices = (() => {
    const indices: number[] = [];
    // Seat (3x3 block)
    for (let r = 9; r <= 11; r++) {
      for (let c = 8; c <= 10; c++) {
        indices.push(r * cols + c);
      }
    }
    return indices;
  })();

  // Helper to determine if a cell is part of the body
  const isBodyCell = (index: number) =>
    !wheelIndices.includes(index) && !seatIndices.includes(index);

  // Initialize cell colors
  const [cellColors, setCellColors] = useState<string[]>(
    Array.from({ length: totalCells }, (_, i) => {
      if (wheelIndices.includes(i)) return "black";
      if (seatIndices.includes(i)) return "gray";
      return selectedColor;
    })
  );

  // Update body cells when selectedColor changes
  useEffect(() => {
    setCellColors((prev) =>
      prev.map((color, idx) => (isBodyCell(idx) ? selectedColor : color))
    );
  }, [selectedColor, isBodyCell]);

  // Handle cell click
  const handleCellClick = (index: number) => {
    if (!isBodyCell(index)) return;
    setCellColors((prev) => {
      const newColors = [...prev];
      newColors[index] = selectedColor;
      return newColors;
    });
  };

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 15px)`,
        gridTemplateRows: `repeat(${rows}, 15px)`,
        gap: "0px",
        width: `${cols * 15}px`,
        height: `${rows * 15}px`,
      }}
    >
      {cellColors.map((color, idx) => (
        <div
          key={idx}
          onClick={() => handleCellClick(idx)}
          style={{
            width: "15px",
            height: "15px",
            backgroundColor: color,
            cursor: isBodyCell(idx) ? "pointer" : "default",
          }}
        />
      ))}
    </div>
  );
};
