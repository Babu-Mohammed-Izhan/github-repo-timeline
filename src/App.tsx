import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Startpage from "./components/Startpage";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Startpage username={username} setUsername={setUsername} />}
        />
        <Route path="main" element={<Mainpage username={username} />} />
      </Routes>
    </div>
  );
}

export default App;
