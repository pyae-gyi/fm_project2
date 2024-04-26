import React from "react";
import "../index.css";
import omletImg from "../../assets/images/image-omelette.jpeg";
import InstructionLi from "../utility/InstructionLi";
import NutritionItem from "../utility/NutritionItem";
export default function App() {
  return (
    <div className="flex flex-col text-base">
      <div className=" border w-full md:w-1/2 ">
        <img src={omletImg} className="object-cover w-full aspect-video " />
      </div>
      <div className="p-6">
        <h2 className="text-5xl">Simple Omlet Recipe</h2>
        <p>
          An easy quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-pink-50 rounded-lg px-4 py-[18px]">
          <p className="font-bold text-pink-800 text-xl">Preparation time</p>
          <ul className="pl-2">
            <li className="flex gap-3">
              <p className="font-bold text-yellow-800">·</p>
              <p>
                <span className="font-bold text-yellow-800">Total:</span>{" "}
                Approximately 10 minutes.
              </p>
            </li>
            <li className="flex gap-3">
              <p className="font-bold text-yellow-800">·</p>
              <p>
                <span className="font-bold text-yellow-800">Preparation:</span>{" "}
                5 minutes
              </p>
            </li>
            <li className="flex gap-3">
              <p className="font-bold text-yellow-800">·</p>
              <p>
                <span className="font-bold text-yellow-800">Cooking:</span> 5
                minutes
              </p>
            </li>
          </ul>
        </div>
        <p className="font-bold text-orange-900 text-2xl">Ingredients</p>
        <ul className="pl-2">
          <li className="flex gap-3">
            <p className="font-bold text-yellow-800">·</p>
            <p>2-3 large eggs</p>
          </li>
          <li className="flex gap-3">
            <p className="font-bold text-yellow-800">·</p>
            <p>Salt to taste</p>
          </li>
          <li className="flex gap-3">
            <p className="font-bold text-yellow-800">·</p>
            <p>Pepper to taste</p>
          </li>
          <li className="flex gap-3">
            <p className="font-bold text-yellow-800">·</p>
            <p>1 tablespoon of butter or oil</p>
          </li>
          <li className="flex gap-3">
            <p className="font-bold text-yellow-800">·</p>
            <p>
              Optional fillings: cheese, diced vegeatbles, cooked meats, herbs
            </p>
          </li>
        </ul>
        <p className="font-bold text-orange-900 text-2xl">Instructions</p>
        <ul className="pl-2">
          <InstructionLi number="1" description_short_form="Beat the eggs" />
          <InstructionLi number="2" description_short_form="Heat the pen" />
          <InstructionLi
            number="3"
            description_short_form="Cook the omelette"
          />
          <InstructionLi
            number="4"
            description_short_form="Add fillings (Optional)"
          />
          <InstructionLi number="5" description_short_form="Food and serve" />
          <InstructionLi number="6" description_short_form="Enjoy" />
        </ul>
        <p className="font-bold text-orange-900 text-2xl">Nutrition</p>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <NutritionItem item="Calories" amount="277kcal" />
        <NutritionItem item="Carbs" amount="0g" />
        <NutritionItem item="Proteins" amount="20g" />
        <NutritionItem item="Fats" amount="22g" />
      </div>
    </div>
  );
}
