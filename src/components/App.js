import "./App.css";
import React, { useRef } from "react";
import { useClientWidthHeight } from "../hooks/useClientWidthHeight";
import EyesOnMe from "./EyesOnMe";

function App() {
  const appRef = useRef(null);
  const clientRect = useClientWidthHeight(appRef);
  return (
    <div className="App" ref={appRef}>
      {clientRect.Width && <EyesOnMe width={clientRect.Width} height={clientRect.Height} />}
    </div>
  );
}

export default App;
