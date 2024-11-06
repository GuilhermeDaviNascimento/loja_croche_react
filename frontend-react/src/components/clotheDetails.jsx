import roupa from "../assets/images/roupa1.svg";

export default function components() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex items-center justify-center">
        <div className="relative inline-block">
          <img src={roupa} alt="roupa1" className="relative z-10 w-80 h-auto" />
          <div className="absolute top-1/2 left-1/2 w-44 h-44 rounded-full bg-segundary z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div className="flex flex-col items-start text-default gap-2">
        <h1 className="text-xl">Roupa de crochê 1</h1>
        <div>
          <p className="text-lg">Cor:</p>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
            <div className="w-5 h-5 bg-red-300 rounded-full"></div>
            <div className="w-5 h-5 bg-green-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-emphasis rounded-full flex items-center justify-center">
            P
          </div>
          <div className="w-10 h-10 bg-emphasis rounded-full flex items-center justify-center">
            M
          </div>
          <div className="w-10 h-10 bg-emphasis rounded-full flex items-center justify-center">
            G
          </div>
          <div className="w-10 h-10 bg-emphasis rounded-full flex items-center justify-center">
            GG
          </div>
        </div>
        <div className="text-xl">99,99R$</div>
        <div className="flex flex-col items-start gap-2">
          <button
            type="button"
            class="text-default bg-emphasis hover:bg-emphasis-dark focus:ring-2 focus:ring-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Comprar
          </button>
          <button
            type="button"
            class="text-default bg-emphasis hover:bg-emphasis-dark focus:ring-2 focus:ring-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
