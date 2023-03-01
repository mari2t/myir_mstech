import React from "react";
import { Header } from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="bg-neutral-400 min-h-screen overflow-visible">
      <Header />
      <Body />
    </div>
  );
}

export default App;
