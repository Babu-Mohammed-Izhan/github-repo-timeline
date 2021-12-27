import React from "react";
import { Link } from "react-router-dom";

interface StartpageProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Startpage = ({ username, setUsername }: StartpageProps) => {
  const handleUsername = () => {
    localStorage.setItem("Github-contrib-username", username);
  };

  return (
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed bg-white dark:bg-gray-900 h-full">
      <div className="h-full">
        <div className="container py-10 md:py-20 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <div className="flex flex-col w-full lg:w-4/5 justify-center lg:items-start overflow-y-hidden">
            <div className="p-8">
              <h1 className="my-4 text-3xl md:text-5xl dark:text-white text-black font-bold leading-tight text-center md:text-left">
                All your
                <span className="px-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                  GitHub
                </span>
                stats at on position.
              </h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"></p>
            </div>

            <form className="bg-white dark:bg-gray-900 w-full shadow-lg rounded-lg p-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-blue-900 dark:text-blue-300 py-2 font-bold mb-2"
                  htmlFor="username"
                >
                  Enter you GitHib username.
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>

              <div className="flex items-center justify-start pt-4">
                <button
                  className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out mr-4"
                  type="button"
                >
                  <Link to="/repo" onClick={() => handleUsername()}>
                    Repos
                  </Link>
                </button>
                <button
                  className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out mr-4"
                  type="button"
                >
                  <Link to="/contrib" onClick={() => handleUsername()}>
                    Contributions
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Startpage;
