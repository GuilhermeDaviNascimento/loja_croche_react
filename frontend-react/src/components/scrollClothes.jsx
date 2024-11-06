import React from "react";
import Clothe from "./clothe";

export default function ScrollClothes({ texto, array }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-default">{texto}</h1>
        <a href="" className="text-xs text-default">
          Ver tudo
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {array.map((clothe) => (
          <Clothe key={clothe.name} name={clothe.name} price={clothe.price} />
        ))}
      </div>
    </div>
  );
}
