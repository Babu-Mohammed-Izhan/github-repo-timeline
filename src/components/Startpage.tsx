import React from "react";

interface StartpageProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Startpage = ({ username, setUsername }: StartpageProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1>GitHub Repo Timeline</h1>
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
      </div>
    </div>
  );
};

export default Startpage;
