import { useState } from "react";

import Title from "./components/Title";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [isVisible, setVisible] = useState(true);
  const handleClick = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Button onClick={handleClick}>
        {isVisible ? "Hide title" : "Show title"}
      </Button>

      {/* {isVisible ? (
        <>
          <Title name="Products" type="bold" />
          <Title name="Employees" type="normal" />
        </>
      ) : (
        ""
      )} */}

      {isVisible && (
        <>
          <Title name="Products" type="bold" />
          <Title name="Employees" type="normal" />
        </>
      )}
      {!isVisible && ""}
    </div>
  );
}



export default App;
