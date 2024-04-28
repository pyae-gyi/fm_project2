import React from "react";

export default function InstructionLi({ number, description_short_form }) {
  return (
    <li className="flex gap-3">
      <p className="font-bold text-yellow-800">{number}.</p>
      <p>
        <span className="font-bold text-yellow-800">
          {description_short_form}:
        </span>{" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
        tempora praesentium tempore ullam culpa omnis laborum, cumque possimus
        aperiam id.
      </p>
    </li>
  );
}
