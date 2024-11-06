import roupa1 from "../assets/images/roupa1.svg";

export default function components({name, price}) {
  return (
    <div>
      <div className="w-40 h-40 bg-emphasis rounded-lg shrink-0 flex p-2">
        <img src={roupa1} alt="" />
      </div>
      <h1 className="text-default mt-2">{name}</h1>
      <h1 className="text-default text-lg">{price}</h1>
    </div>
  );
}
