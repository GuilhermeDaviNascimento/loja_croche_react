import "../App.css";
import Header from "../components/header";
import ClotheDetails from "../components/clotheDetails";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pages() {
  const { id } = useParams();
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/roupa/${id}`)
      .then((response) => response.json())
      .then((data) => setClothes(data))
      .catch((error) => console.error("Erro ao buscar roupas:", error));
  }, [id]);

  return (
    <div className="bg-default w-full h-full px-5 py-5 gap-6 flex flex-col">
      <Header></Header>
      <ClotheDetails name={clothes.name} url={clothes.img_url} price={clothes.price}></ClotheDetails>
    </div>
  );
}
