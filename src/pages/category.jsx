import { useEffect, useState } from "react";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import Clothe from "../components/clothe";

export default function Pages() {
  const { category } = useParams();
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}categoria/${category}`)
      .then((response) => response.json())
      .then((data) => setClothes(data))
      .catch((error) => console.error("Erro ao buscar roupas:", error));
  }, [category]);

  return (
    <div className="bg-default w-full h-full px-5 py-5 gap-6 flex flex-col">
      <Header></Header>
      <h1 className="text-default text-3xl">{category}</h1>
      <div className="flex">
        {clothes.map((clothe) => (
          <Clothe
            key={clothe.name}
            id={clothe.id}
            name={clothe.name}
            price={clothe.price}
            url={clothe.img_url}
          />
        ))}
      </div>
    </div>
  );
}
