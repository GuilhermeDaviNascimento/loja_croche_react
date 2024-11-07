export default function components({imagem, colecao}) {
  return (
    <div className="w-20 h-20 flex flex-col items-center justify-center border-colections-default rounded-lg shrink-0">
      <div>
        <img src={imagem} alt="" />
      </div>
      <p className="text-default text-sm">{colecao}</p>
    </div>
  );
}
