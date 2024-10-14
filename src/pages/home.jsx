import "../App.css";
import Header from "../components/header";
import Input from "../components/input";
import Colections from "../components/colections";
import Popular from "../components/sectionPopular";
import ScrollClothes from "../components/scrollClothes";

export default function pages() {
  return (
    <div className="bg-default w-full h-full px-5 py-5 gap-6 flex flex-col">
      <Header></Header>
      <Input></Input>
      <Colections></Colections>
      <Popular></Popular>
      <ScrollClothes texto="Novidades"></ScrollClothes>
      <ScrollClothes texto="Coquette"></ScrollClothes>
      <ScrollClothes texto="Praia"></ScrollClothes>
    </div>
  );
}
