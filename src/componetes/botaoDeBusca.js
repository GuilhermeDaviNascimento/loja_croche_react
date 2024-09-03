import lupa from '../svgs/botaodebusca/lupa.svg'

function botaodebusca (){
    return (
        <div className='containerbusca'>
        <input type="text" placeholder="Buscar" className='inputbusca'/>
        <img src={lupa} className='lupa'/>
        </div>
    )
}

export default botaodebusca