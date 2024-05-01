import React from "react";
import "../index.css";
import omletImg from "../../assets/images/image-omelette.jpeg";
import InstructionLi from "../utility/InstructionLi";
import NutritionItem from "../utility/NutritionItem";
export default function App() {
  return (
    <div className="md:bg-red-50 flex justify-center items-center md:py-5 md:shadow-2xl">
      <div className="flex flex-col text-base bg-white md:w-1/2 md:p-7 md:rounded-2xl">
        <div className="w-full">
          <img
            src={omletImg}
            className="object-cover w-full aspect-video md:rounded-2xl"
          />
        </div>
        <div className="max-md:px-6 space-y-6 py-6">
          <h2 className="text-4xl md:text-5xl font-YoungSerif line max-md:leading-snug">
            Simple Omlet Recipe
          </h2>
          <p>
            An easy quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="bg-pink-50 rounded-lg px-4 py-[18px] space-y-2">
            <p className="font-bold text-pink-800 text-xl">Preparation time</p>
            <ul className="pl-2 space-y-2">
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
                  <span className="font-bold text-yellow-800">
                    Preparation:
                  </span>{" "}
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
          <section className="space-y-4" id="ingredients">
            <p className="font-bold text-orange-900 text-2xl font-YoungSerif">
              Ingredients
            </p>
            <ul className="pl-2 space-y-2 ">
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
                  Optional fillings: cheese, diced vegeatbles, cooked meats,
                  herbs
                </p>
              </li>
            </ul>
          </section>
          <hr />
          <section id="instructions" className="space-y-4">
            <p className="font-bold text-orange-900 text-2xl font-YoungSerif">
              Instructions
            </p>
            <ul className="pl-2 space-y-2">
              <InstructionLi
                number="1"
                description_short_form="Beat the eggs"
              />
              <InstructionLi number="2" description_short_form="Heat the pen" />
              <InstructionLi
                number="3"
                description_short_form="Cook the omelette"
              />
              <InstructionLi
                number="4"
                description_short_form="Add fillings (Optional)"
              />
              <InstructionLi
                number="5"
                description_short_form="Food and serve"
              />
              <InstructionLi number="6" description_short_form="Enjoy" />
            </ul>
          </section>
          <hr />
          <section id="nutrition " className="space-y-4">
            <p className="font-YoungSerif font-bold text-orange-900 text-2xl">
              Nutrition
            </p>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div>
              <NutritionItem item="Calories" amount="277kcal" />
              <NutritionItem item="Carbs" amount="0g" />
              <NutritionItem item="Proteins" amount="20g" />
              <NutritionItem item="Fats" amount="22g" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
