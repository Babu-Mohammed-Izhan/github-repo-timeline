import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

interface MainpageProps {
  username: string;
}

const Mainpage = ({ username }: MainpageProps) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    //   )
    //   .then((e: any) => {
    //     console.log(e);
    //   });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div>{username}</div>
      <div>
        {repos &&
          repos.map((r) => {
            return <Card repo={r} />;
          })}
      </div>
    </div>
  );
};

export default Mainpage;
