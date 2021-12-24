import { SetStateAction, useEffect, useState } from "react";
import { Octokit } from "octokit";

interface MainpageProps {
  username: string;
}

const Mainpage = ({ username }: MainpageProps) => {
  const octokit = new Octokit({});

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    octokit.rest.repos.get((r: { data: SetStateAction<never[]> }) => {
      console.log(r);
      setRepos(r.data);
    });
  }, []);

  return (
    <div>
      <div>{username}</div>
      <div>{repos}</div>
    </div>
  );
};

export default Mainpage;
