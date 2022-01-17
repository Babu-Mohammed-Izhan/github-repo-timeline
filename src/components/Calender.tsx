/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../App';
import axios from 'axios';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

interface CalProps {
  username: string;
  color: string;
  theme: {
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
}

const Calender = ({ username, color, theme }: CalProps) => {
  const mode = useContext(ThemeContext);
  const [years, setYears] = useState<number[]>([]);

  function range(size: number, startAt: number = 0): Array<number> {
    return [...Array(size).keys()]
      .map((i) => i + startAt)
      .sort((a, b) => b - a);
  }

  const getUserdata = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const createdDate: number = Number(response.data.created_at.split('-')[0]);
    const currentDate: number = new Date().getFullYear();
    const difference: number = currentDate - createdDate;
    setYears(range(difference + 1, createdDate));
  };

  useEffect(() => {
    getUserdata();
  }, []);

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  return (
    <>
      {years.length &&
        years.map((y) => {
          return (
            <div className="my-6" key={y}>
              <GitHubCalendar
                username={username}
                blockSize={getWidth() < 400 ? 10 : 20}
                theme={mode === 'dark' ? theme : undefined}
                color={color}
                year={y}
              >
                <ReactTooltip html />
              </GitHubCalendar>
            </div>
          );
        })}
    </>
  );
};

export default Calender;
