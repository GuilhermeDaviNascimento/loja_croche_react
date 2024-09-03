import tesoura from '../svgs/colecoes/tesoura.svg'

function botaoColecao(){
    return (
        <div>
            <button className='botoesDeColecao'>
                <img src={tesoura} />
                <div>Coleção</div>
            </button>
        </div>
    )
}

export default botaoColecao