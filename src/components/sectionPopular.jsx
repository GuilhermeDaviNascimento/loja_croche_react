import { Link } from "react-router-dom";
import Popular from "./popular";

export default function Section_Popular({ popular_arr }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-default">Popular</h1>
        <Link to={`./categoria/Popular`} className="text-xs text-default">
          Ver tudo
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden">
      {popular_arr && Array.isArray(popular_arr) ? (
          popular_arr.map((item, index) => (
            <Popular
              id={item.id}
              nome={item.name}
              preco={item.price}
              foto={item.img_url}
            />
          ))
        ) : (
          <p className="text-default">Carregando...</p>
        )}
      </div>
    </div>
  );
}
