import Popular from './popular'
import biquinisereia from '../assets/images/biquini-sereia.png'
import cropped from '../assets/images/cropped.png'

export default function Section_Popular() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-default">Popular</h1>
        <a href="" className="text-xs text-default">Ver tudo</a>
      </div>
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden">
        <Popular nome='Biquíni Sereia' preco='100R$' foto={biquinisereia} ></Popular>
        <Popular nome='Cropped' preco='50R$' foto={cropped} ></Popular>
      </div>
    </div>
  );
}
