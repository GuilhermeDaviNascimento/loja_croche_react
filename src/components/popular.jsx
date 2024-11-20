import { Link } from "react-router-dom";

export default function components({ id, nome, preco, foto }) {
  return (
    <Link className="bg-emphasis w-72 h-40 rounded-lg p-3 flex justify-center items-center shrink-0" to={`/roupa/${id}`}>
      <div className="flex flex-col justify-center w-max h-full">
        <div className="flex items-center">
          <p className="text-default">5</p>
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="w-32">
          <h3 className="text-default">{nome}</h3>
          <h3 className="text-default">{preco} R$</h3>
        </div>

      </div>
      <div className="relative inline-block">
        <img src={foto} alt="roupa1" className="relative z-10" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-segundary z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </Link>
  );
}
