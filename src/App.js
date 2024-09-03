import "./App.css";
import ContainerTop from "./componetes/containerTop";
import BotaoDeBusca from "./componetes/botaoDeBusca";
import BotaoColecao from "./componetes/botaoColecao";
import RouparPopular from "./componetes/roupasPopulares";

function App() {
  return (
    <div>
      <ContainerTop />
      <BotaoDeBusca />
      <div className="containerColecoes">
        <BotaoColecao />
        <BotaoColecao />
        <BotaoColecao />
        <BotaoColecao />
      </div>
      <div className="container3">
        <div className="popularEvertodos">
        <h3>Popular</h3>
        <p>Ver Todos</p>
        </div>
        <div className="containerPopular">
          <RouparPopular />
          <RouparPopular />
        </div>
      </div>
    </div>
  );
}

export default App;
