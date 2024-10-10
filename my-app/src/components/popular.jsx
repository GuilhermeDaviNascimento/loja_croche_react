import roupa1 from "../assets/images/roupa1.svg";


export default function components() {
  return (
    <div className="bg-emphasis w-72 h-40 rounded-lg p-3 flex justify-center items-center shrink-0">
      <div className="flex flex-col justify-between w-max h-full">
        <p className="text-default">5</p>
        <div>
          <h3 className="text-default">Roupa</h3>
          <h3 className="text-default">500 R$</h3>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-default">Cores</p>
          <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
          <div className="w-5 h-5 bg-red-300 rounded-full"></div>
          <div className="w-5 h-5 bg-green-300 rounded-full"></div>
        </div>
      </div>
      <div className="relative inline-block">
        <img src={roupa1} alt="roupa1" className="relative z-10" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-segundary z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}
