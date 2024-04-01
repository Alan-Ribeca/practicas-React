import { Container } from "./components/grid/Container";
import { Header } from "./components/navbar/Header";
import "./styles/App.scss";
import { StateCompo } from "./context/StateCompo";

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
