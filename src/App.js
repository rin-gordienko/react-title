import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title name="Products" type="bold" />
      <Title name="Employees" type="normal" />
    </div>
  );
}

export default App;
