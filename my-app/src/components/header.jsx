import logo from '../assets/logo/logo.svg'

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <button>
        <i class="fa-solid fa-bars"></i>
      </button>
      {/* <button>
        <img src={logo} alt="logo" />
      </button> */}
      <button>
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </header>
  );
}
