import React from "react";
import { Route, Routes } from "react-router-dom";
import Startpage from "./components/Startpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/main" element={<Startpage />} />
      </Routes>
    </div>
  );
}

export default App;
