import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

interface MainpageProps {
  username: string;
}

const Mainpage = ({ username }: MainpageProps) => {
  const [repos, setRepos] = useState([]);

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
    <div className="flex items-center justify-center h-screen flex-col m-auto w-4/5 md:w-1/2 py-10 my-10">
      <div>{username}</div>
      <div className=" max-h-screen mb-10">
        {repos &&
          repos.map((r: any) => {
            return <Card key={r.id} repo={r} />;
          })}
      </div>
    </div>
  );
};

export default Mainpage;
