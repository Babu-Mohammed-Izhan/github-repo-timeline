import { memo } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

interface CalProps {
  username: string;
  color: string;
}

const Calender = ({ username, color }: CalProps) => {
  return (
    <>
      <GitHubCalendar username={username} blockSize={20} color={color}>
        <ReactTooltip html />
      </GitHubCalendar>
    </>
  );
};

export default memo(Calender);
