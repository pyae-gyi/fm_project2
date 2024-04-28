import React from "react";

export default function NutritionItem({ item, amount }) {
  return (
    <p className="flex pl-8 py-2 border-b">
      <span className="flex-1">{item}</span>
      <span className="flex-1 font-bold text-yellow-800">{amount}</span>
    </p>
  );
}
