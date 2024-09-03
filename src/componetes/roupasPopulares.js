import roupa1 from "../svgs/container_popular/roupa1.svg";

function roupaPopular() {
  return (
    <div className='pupolarcontainergeral'>
      <div>
        <p>5</p>
      </div>
      <div className='containermeiopopular'>
        <div className="preco">
        <p>Suéter <br/> 500$</p>
        </div>
        <div className='containerroupamaisbola'>
          <img src={roupa1} alt="" className='roupas'/>
          <div className="circuloVerde"></div>
        </div>
      </div>
      <div className="corespopular">
        <p>Cores</p>
        <div className="bege"></div>
        <div className="verde"></div>
        <div className="vermelho"></div>
      </div>
    </div>
  );
}

export default roupaPopular;
