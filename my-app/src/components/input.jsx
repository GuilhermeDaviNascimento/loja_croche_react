export default function Input() {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-10 bg-default border-input-default">
        <input
          className="w-full h-full bg-default placeholder-default"
          type="text"
          name="input"
          id="input"
          placeholder="Procurar"
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
