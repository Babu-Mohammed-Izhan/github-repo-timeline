import { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Calender from './Calender';
import { ThemeContext } from '../App';

const Contributions = () => {
  const [color, setColor] = useState('#1A9B45');
  const [theme, setTheme] = useState({
    level0: '#161B22',
    level1: '#0E4429',
    level2: '#006D32',
    level3: '#26A641',
    level4: '#39D353',
  });

  const mode = useContext(ThemeContext);

  let params = useParams();

  return (
    <div className=" bg-white dark:bg-[rgb(13,17,23)] ">
      <div className="flex items-center justify-center flex-col pt-10 w-11/12 m-auto ">
        <Link to="/">
          <span className="dark:text-white">Home</span>
        </Link>
        <h1 className="text-xl md:text-3xl mb-5 dark:text-white">
          {params.username}
        </h1>
        <Link to={`/${params.username}/repo`}>
          <span className="dark:text-purple-100">Go To Repos List</span>
        </Link>
        <div className="my-3 md:my-10 w-full text-center p-5 rounded dark:text-white">
          <h2 className="md:text-3xl mb-5 ">Contributions</h2>
          <Calender
            username={params.username ? params.username : ''}
            color={color}
            theme={theme}
          />

          <div className="flex items-center justify-center">
            {mode === 'dark' ? (
              <div className="flex flex-col md:flex-row justify-center">
                <label htmlFor="color" className="mx-3 pb-[5px]">
                  Theme:
                </label>
                <div className="flex md:flex-row flex-col">
                  <button
                    className="bg-gradient-to-r from-green-800 to-green-500 hover:from-green-500 hover:to-green-300 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out mb-4 md:mr-4 text-xs md:text-base"
                    onClick={() =>
                      setTheme({
                        level0: '#161B22',
                        level1: '#0E4429',
                        level2: '#006D32',
                        level3: '#26A641',
                        level4: '#39D353',
                      })
                    }
                  >
                    Github
                  </button>
                  <button
                    className="bg-gradient-to-r from-orange-800 to-orange-500 hover:from-orange-500 hover:to-orange-300 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out mb-4 md:mr-4 text-xs md:text-base"
                    onClick={() =>
                      setTheme({
                        level0: '#161B22',
                        level1: '#fdf156',
                        level2: '#ffc722',
                        level3: '#ff9711',
                        level4: '#04001b',
                      })
                    }
                  >
                    Halloween
                  </button>
                  <button
                    className="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-500 hover:to-red-300 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out mb-4 md:mr-4 text-xs md:text-base"
                    onClick={() =>
                      setTheme({
                        level0: '#161B22',
                        level1: '#eeeeee',
                        level2: '#D03B3B',
                        level3: '#136637',
                        level4: '#28543C',
                      })
                    }
                  >
                    Christmas
                  </button>
                </div>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
