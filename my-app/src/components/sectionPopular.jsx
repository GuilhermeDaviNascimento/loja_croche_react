import Popular from './popular'

export default function Section_Popular() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-default">Popular</h1>
        <a href="" className="text-xs text-default">Ver tudo</a>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        <Popular></Popular>
        <Popular></Popular>
      </div>
    </div>
  );
}
