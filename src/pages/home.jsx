import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/header";
import Input from "../components/input";
import Colections from "../components/colections";
import Popular from "../components/sectionPopular";
import ScrollClothes from "../components/scrollClothes";


export default function Pages() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then((response) => response.json())
      .then((data) => setClothes(data))
      .catch((error) => console.error("Erro ao buscar roupas:", error));
  }, []);

  const groupedClothes = clothes.reduce((acc, item) => {
    item.category.forEach((category) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
    });
    return acc;
  }, {});

  return (
    <div className="bg-default w-full h-full px-5 py-5 gap-6 flex flex-col">
      <Header />
      <Input />
      <Colections />
      <Popular popular_arr={groupedClothes["Popular"]}></Popular>
      {Object.keys(groupedClothes).map((category) => (
        <ScrollClothes
          key={category}
          texto={category}
          array={groupedClothes[category]}
        />
      ))}
    </div>
  );
}
