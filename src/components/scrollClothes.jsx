import React from "react";
import Clothe from "./clothe";
import { Link } from "react-router-dom";

export default function ScrollClothes({ texto, array }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-default">{texto}</h1>
        <Link to={`/categoria/${texto}`} className="text-xs text-default">
          Ver tudo
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {array.map((clothe) => (
          <Clothe key={clothe.name} id={clothe.id} name={clothe.name} price={clothe.price} url={clothe.img_url} />
        ))}
      </div>
    </div>
  );
}
