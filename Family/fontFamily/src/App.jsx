import { Container } from "./components/grid/Container";
import { Logica } from "./components/funcionamiento/Logica";
import { Header } from "./components/navbar/Header";
import "./styles/App.scss";

function App() {
  return (
    <div className="body">
      <Header />
      <Container />
      <Logica />
    </div>
  );
}

export default App;
