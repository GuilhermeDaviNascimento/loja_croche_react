import Clothe from "./clothe";

export default function components({texto}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-default">{texto}</h1>
        <a href="" className="text-xs text-default">
          Ver tudo
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <Clothe></Clothe>
        <Clothe></Clothe>
        <Clothe></Clothe>
      </div>
    </div>
  );
}
