import React from "react";
import { Link } from "react-router-dom";

interface StartpageProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Startpage = ({ username, setUsername }: StartpageProps) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
        <h1>GitHub Repo Timeline</h1>
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
      <Link to="/main">Mainpage</Link>
    </div>
  );
};

export default Startpage;
