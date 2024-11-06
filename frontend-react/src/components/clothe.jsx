import { Link } from "react-router-dom";

export default function components({ id, name, price, url }) {
  return (
    <Link to={`/roupa/${id}`}>
      <div className="w-40 h-40 bg-emphasis rounded-lg shrink-0 flex p-2 items-center justify-center overflow-hidden">
        <img src={url} alt="" />
      </div>
      <h1 className="text-default mt-2 w-44">{name}</h1>
      <h1 className="text-default text-lg">{price} R$</h1>
    </Link>
  );
}
