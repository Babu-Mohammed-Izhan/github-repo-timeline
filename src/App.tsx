import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Contributions from "./components/Contributions";
import Repos from "./components/repos";
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
        <Route path="repo" element={<Repos username={username} />} />
        <Route path="contrib" element={<Contributions username={username} />} />
      </Routes>
    </div>
  );
}

export default App;
