import Colection from './colection'
import ribbon from '../assets/images/christmas-bow-svgrepo-com.svg'
import sum from '../assets/images/summer-svgrepo-com.svg'
import mermaid from '../assets/images/sereia.svg'

export default function Colections() {
  return (
    <div className="flex gap-2 overflow-x-auto">
      <Colection imagem={mermaid} colecao='Sereia' ></Colection>
      <Colection imagem={ribbon} colecao='Coqquete' ></Colection>
      <Colection imagem={sum} colecao='Verão' ></Colection>
    </div>
  );
}
