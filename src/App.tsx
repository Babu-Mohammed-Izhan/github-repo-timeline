import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import Contributions from "./components/Contributions";
import Repos from "./components/repos";
import Startpage from "./components/Startpage";

export const ThemeContext = createContext({});

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <ThemeContext.Provider value={mode}>
      <div className={` ${mode} min-h-full w-full  `}>
        <div className="w-full mx-auto bg-white dark:bg-[rgb(13,17,23)]  min-h-screen">
          <header className=" flex items-center justify-between px-20">
            <a
              className="flex items-center text-green-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              GitHub Repo
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mx-3">
                Timeline
              </span>
            </a>

            <div className="flex justify-end content-center">
              <a
                className="inline-block text-blue-300 no-underline  hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
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
              <button
                className="text-black dark:text-white"
                onClick={() => {
                  mode === "dark" ? setMode("light") : setMode("dark");
                }}
              >
                {mode === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Startpage />} />
            <Route path="/:username/repo" element={<Repos />} />
            <Route path="/:username/contrib" element={<Contributions />} />
          </Routes>
          <footer className="w-full h-full py-8 text-sm text-center md:text-left fade-in text-black dark:text-white bg-white dark:bg-[rgb(13,17,23)] ">
            <div className="w-5/6 m-auto">
              <a
                className="text-purple-700 dark:text-purple-300 no-underline hover:no-underline"
                href="/"
              >
                &copy; App 2021
              </a>
              - Created by
              <a
                className=" text-purple-700 dark:text-purple-300 no-underline hover:no-underline px-1"
                href="https://babumohammedizhan.netlify.app/"
              >
                Babu Mohammed Izhan
              </a>
            </div>
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
