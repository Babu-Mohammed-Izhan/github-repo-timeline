import { useState } from "react";
import Calender from "./Calender";

interface Contrib {
  username: string;
}

const Contributions = ({ username }: Contrib) => {
  const [color, setColor] = useState("#0E4429");

  return (
    <div className="flex items-center justify-center flex-col pt-10 w-11/12 md:w-4/5 m-auto">
      <h1 className="text-xl md:text-3xl mb-5">{username}</h1>
      <h2 className="md:text-3xl mb-5">Contributions</h2>
      <Calender username={username} color={color} />
      <input
        className="cursor-pointer"
        type="color"
        name="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default Contributions;
