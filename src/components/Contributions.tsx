import { useState } from "react";
import { Link } from "react-router-dom";
import Calender from "./Calender";

interface Contrib {
  username: string;
}

const Contributions = ({ username }: Contrib) => {
  const [color, setColor] = useState("#1A9B45");

  return (
    <div className="flex items-center justify-center flex-col pt-10 w-11/12 md:w-4/5 m-auto">
      <h1 className="text-xl md:text-3xl mb-5">{username}</h1>
      <Link to="/repo">Go To Repos List</Link>
      <div className="my-3 md:my-20 w-full text-center">
        <h2 className="md:text-3xl mb-5">Contributions</h2>
        <Calender username={username} color={color} />
        <div className="flex items-center justify-center">
          <label htmlFor="color" className="mx-3 pb-[5px]">
            Color:
          </label>
          <input
            className="cursor-pointer"
            type="color"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contributions;
