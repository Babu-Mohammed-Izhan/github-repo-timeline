import { useEffect, useState } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

interface CalProps {
  username: string;
  color: string;
}

const Calender = ({ username, color }: CalProps) => {
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

    const createdDate: number = Number(response.data.created_at.split("-")[0]);
    const currentDate: number = new Date().getFullYear();
    const difference: number = currentDate - createdDate;
    setYears(range(difference + 1, createdDate));
  };

  useEffect(() => {
    getUserdata();
  }, []);

  return (
    <>
      {years.length &&
        years.map((y) => {
          return (
            <div className="my-6" key={y}>
              <GitHubCalendar
                username={username}
                blockSize={20}
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
