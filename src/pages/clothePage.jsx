import "../App.css";
import Header from "../components/header";
import ClotheDetails from "../components/clotheDetails";

export default function pages() {
  return (
    <div className="bg-default w-full h-full px-5 py-5 gap-6 flex flex-col">
      <Header></Header>
      <ClotheDetails></ClotheDetails>
    </div>
  );
}
