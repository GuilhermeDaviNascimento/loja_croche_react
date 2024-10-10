import roupa1 from "../assets/images/roupa1.svg";

export default function Popular() {
  return (
    <div>
      <h1 className="text-default">Popular</h1>
      <div className="bg-emphasis w-72 h-40 rounded-lg p-3 flex justify-center items-center">
        <div className="flex flex-col justify-between w-max h-full">
          <p>5</p>
          <div>
            <h3>Roupa</h3>
            <h3>500R$</h3>
          </div>
          <div className="flex gap-3 items-center">
            <p>Cores</p>
            <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
            <div className="w-5 h-5 bg-red-300 rounded-full"></div>
            <div className="w-5 h-5 bg-green-300 rounded-full"></div>
          </div>
        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
}
