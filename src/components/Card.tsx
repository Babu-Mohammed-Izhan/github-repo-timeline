const Colors: any = {
  TypeScript: {
    border: "border-b-blue-700",
    bg: "bg-blue-700",
  },
  JavaScript: { border: "border-b-yellow-400", bg: "bg-yellow-400" },
  HTML: { border: "border-b-orange-600", bg: "bg-orange-600" },
  Python: { border: "border-b-blue-900", bg: "bg-blue-900" },
  SCSS: { border: "border-b-pink-400", bg: "bg-pink-400" },
  CSS: { border: "border-b-indigo-600", bg: "bg-indigo-600" },
  default: { border: "border-b-grey-400", bg: "bg-grey-400" },
};

interface Repo {
  repo: {
    name: string;
    language: string;
    description: string;
    html_url: string;
    created_at: string;
  };
}

const Card = ({ repo }: Repo) => {
  return (
    <div
      className={` border border-gray-200 bg-white hover:bg-gray-50 border-b-2 hover:border-b-4 ${
        Colors.hasOwnProperty(repo.language)
          ? Colors[repo.language].border
          : "default"
      } active:bg-gray-100 rounded-md p-3 my-3 cursor-pointer `}
      onClick={() => window.location.assign(repo.html_url)}
    >
      <div className="flex items-start justify-between flex-col h-full py-2">
        <p className="text-xs pb-1">{repo.created_at.split("T")[0]}</p>
        <a
          className="text-blue-400 text-xl"
          href={`${repo.html_url}`}
          target="_blank"
          rel="noreferrer"
        >
          {repo.name}
        </a>
        <p className="py-1">{repo.description}</p>
        {repo.language !== "" && (
          <p className="text-sm mt-2 flex items-center justify-center">
            <span
              className={`
              h-1
            p-1
           mr-2
        rounded-full
        ${
          Colors.hasOwnProperty(repo.language)
            ? Colors[repo.language].bg
            : "default"
        }`}
            ></span>
            {repo.language}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
