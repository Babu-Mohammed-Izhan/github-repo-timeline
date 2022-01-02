/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Link, useParams } from "react-router-dom";

export interface RepoType {
  repos: {
    name: string;
    language: string;
    description: string;
    html_url: string;
    created_at: string;
  }[];
  idx: number;
  username: string;
}

const Repos = () => {
  const [repos, setRepos] = useState<RepoType[]>([]);

  let params = useParams();

  useEffect(() => {
    const getData = async (page: number) => {
      const response = await axios.get(
        `https://api.github.com/users/${params.username}/repos?sort=updated&per_page=100&page=${page}`
      );
      if (response.data.length === 100) {
        getData(page + 1);
      }
      setRepos([...repos, ...response.data]);
      console.log(response.data);
    };
    getData(1);
  }, []);

  return (
    <div className=" pt-10 bg-white dark:bg-[rgb(13,17,23)] ">
      <div className="flex items-center justify-center flex-col w-11/12 md:w-4/5 m-auto ">
        <Link to="/">
          <a className="dark:text-white" href="/">
            Home
          </a>
        </Link>
        <h1 className="text-xl md:text-3xl mb-5 dark:text-white">
          {params.username}
        </h1>
        <Link to={`/${params.username}/contrib`}>
          <p className="dark:text-purple-100">Go to Contributions Graph</p>
        </Link>
        <div className="my-3 md:my-10 w-full min-h-[90vh]">
          <h2 className="md:text-3xl mb-5 text-center dark:text-white">
            Repositories
          </h2>
          {repos.length > 0 &&
            repos.map((r: any, idx: number) => {
              return <Card key={r.id} repo={r} idx={idx} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Repos;
