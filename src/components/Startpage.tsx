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
    <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed bg-gray-900 h-full">
      <div className="h-full">
        <div className="w-full container mx-auto">
          <div className="w-full flex items-center justify-between">
            <a
              className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              GitHub Repo
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                Timeline
              </span>
            </a>

            <div className="flex w-1/2 justify-end content-center">
              <a
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://twitter.com/babu_izhan"
              >
                <svg
                  className="fill-current h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container py-20 md:py-32 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <div className="flex flex-col w-full lg:w-4/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              All your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                GitHub
              </span>
              stats at on position.
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"></p>

            <form className="bg-gray-900 w-full shadow-lg rounded-lg p-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-blue-300 py-2 font-bold mb-2"
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

          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="/"
            >
              &copy; App 2021
            </a>
            - Created by
            <a
              className="text-gray-500 no-underline hover:no-underline px-1"
              href="https://babumohammedizhan.netlify.app/"
            >
              Babu Mohammed Izhan
            </a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Startpage;
