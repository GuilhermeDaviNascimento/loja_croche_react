import "./App.css";
import Header from "./components/header";
import Input from "./components/input";
import Colections from "./components/colections";
import Popular from "./components/popular";

function App() {
  return (
    <div className="bg-default w-full h-full px-10 py-5 gap-6 flex flex-col">
      <Header></Header>
      <Input></Input>
      <Colections></Colections>
      <Popular></Popular>
    </div>
  );
}

export default App;
