import { Container } from "./components/grid/Container";
import { Header } from "./components/navbar/Header";
import { StateCompo } from "./context/StateCompo";
import "./styles/App.scss";

function App() {
  return (
    <StateCompo>
      <div className="body">
        <Header />
        <Container />
      </div>
    </StateCompo>
  );
}

export default App;
