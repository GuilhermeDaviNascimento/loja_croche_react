import tresTracos from '../svgs/container_top/tres-tracos.svg'
import sacola_de_compras from '../svgs/container_top/sacola_compras.svg'

function container_top () {
    return (
        <div className='container-top' >
    <div className='tres-tracos'>
      <img src={tresTracos} alt=""/>
    </div>
    <div className='sacola'>
      <img src={sacola_de_compras} alt=""/>
    </div>
  </div>
    )
}

export default container_top