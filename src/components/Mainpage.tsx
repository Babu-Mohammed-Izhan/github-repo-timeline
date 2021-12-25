import { useEffect, useState } from "react";

import Card from "./Card";
import axios from "axios";
import Calender from "./Calender";

interface MainpageProps {
  username: string;
}

const Mainpage = ({ username }: MainpageProps) => {
  const [repos, setRepos] = useState([]);
  const [color, setColor] = useState("#0E4429");

  const getData = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    );
    setRepos(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

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
        defaultValue="#0E4429"
      />
      <div className="my-3 md:my-20 w-full">
        <h2 className="md:text-3xl mb-5 text-center">Repositories</h2>
        {repos &&
          repos.map((r: any, idx: number) => {
            return <Card key={r.id} repo={r} idx={idx} />;
          })}
      </div>
    </div>
  );
};

export default Mainpage;
