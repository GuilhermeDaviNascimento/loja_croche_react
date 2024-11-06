export default function components({nome, preco, foto}) {
  return (
    <div className="bg-emphasis w-72 h-40 rounded-lg p-3 flex justify-center items-center shrink-0">
      <div className="flex flex-col justify-between w-max h-full">
        <div className="flex items-center">  
        <p className="text-default">5</p>
        <i class="fa-solid fa-star"></i>
        </div>
        
        <div>
          <h3 className="text-default">{nome}</h3>
          <h3 className="text-default">{preco}</h3>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-default">Cores</p>
          <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
          <div className="w-5 h-5 bg-red-300 rounded-full"></div>
          <div className="w-5 h-5 bg-green-300 rounded-full"></div>
        </div>
      </div>
      <div className="relative inline-block">
        <img src={foto} alt="roupa1" className="relative z-10" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-segundary z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}
