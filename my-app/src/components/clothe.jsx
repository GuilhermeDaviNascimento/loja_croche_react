import roupa1 from "../assets/images/roupa1.svg";

export default function components() {
  return (
    <div>
      <div className="w-40 h-40 bg-emphasis rounded-lg shrink-0 flex p-2">
        <img src={roupa1} alt="" />
      </div>
      <h1 className="text-default mt-2">Roupinha 1</h1>
      <h1 className="text-default text-lg">299 R$</h1>
    </div>
  );
}
