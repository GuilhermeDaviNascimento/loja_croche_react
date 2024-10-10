import menu from "../assets/images/menu.svg";
import cart from "../assets/images/cart.svg";

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <button>
        <i class="fa-solid fa-bars"></i>
      </button>
      <button>
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </header>
  );
}
