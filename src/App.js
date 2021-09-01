import React from "react";
import { Contador } from "./components/Contador/Contador"
import { Provider } from "./components/Context/Context"

function App() {
  return (
    <Provider>
      <Contador />
    </Provider>
  );
}

export default App;
