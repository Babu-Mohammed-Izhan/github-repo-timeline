const Colors: any = {
  TypeScript: {
    border: 'border-b-blue-700 dark:border-b-blue-700',
    bg: 'bg-blue-700 dark:bg-blue-700',
  },
  JavaScript: {
    border: 'border-b-yellow-400 dark:border-b-yellow-400',
    bg: 'bg-yellow-400 dark:bg-yellow-400',
  },
  HTML: {
    border: 'border-b-orange-600 dark:border-b-orange-600',
    bg: 'bg-orange-600 dark:bg-orange-600',
  },
  Python: {
    border: 'border-b-blue-900 dark:border-b-blue-900',
    bg: 'bg-blue-900 dark:bg-blue-900',
  },
  SCSS: {
    border: 'border-b-pink-400 dark:border-b-pink-400',
    bg: 'bg-pink-400 dark:bg-pink-400',
  },
  CSS: {
    border: 'border-b-indigo-600 dark:border-b-indigo-600',
    bg: 'bg-indigo-600 dark:bg-indigo-600',
  },
  'C#': {
    border: 'border-b-green-600 dark:border-b-green-600',
    bg: 'bg-green-600 dark:bg-green-600',
  },
  default: {
    border: 'border-b-grey-400 dark:border-b-grey-400',
    bg: 'bg-grey-400 dark:bg-grey-400',
  },
};

interface Repo {
  repo: {
    name: string;
    language: string;
    description: string;
    html_url: string;
    created_at: string;
  };
  idx: number;
  repolen: number;
}

const Card = ({ repo, idx, repolen }: Repo) => {
  return (
    <li className={`${idx === repolen - 1 ? `mb-0` : 'mb-10'} ml-4`}>
      <div
        className={`absolute ${
          idx === 0 ? 'w-4 h-4' : 'w-3 h-3'
        } bg-gray-300 rounded-full -left-2 border border-white dark:border-gray-900 dark:bg-gray-500`}
      ></div>
      <div
        className={` border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border-b-2 hover:border-b-[3px] ${
          Colors.hasOwnProperty(repo.language)
            ? Colors[repo.language].border
            : 'default'
        } active:bg-gray-100 rounded-md p-3 my-3 cursor-pointer w-full h-full min-h-[180px] mx-auto`}
        onClick={() => window.location.assign(repo.html_url)}
      >
        <div className="flex items-start justify-between flex-col h-full py-2">
          <p className="text-xs pb-1 dark:text-gray-100">
            {repo.created_at.split('T')[0]}
          </p>
          <a
            className="text-blue-400 text-2xl"
            href={`${repo.html_url}`}
            target="_blank"
            rel="noreferrer"
          >
            {repo.name}
          </a>
          <p className="py-1 dark:text-gray-100 ">{repo.description}</p>
          {repo.language !== '' && (
            <p className="text-sm mt-2 flex items-center justify-center dark:text-gray-100">
              <span
                className={`
              h-1
            p-1
           mr-2
        rounded-full
        ${
          Colors.hasOwnProperty(repo.language)
            ? Colors[repo.language].bg
            : 'default'
        }`}
              ></span>
              {repo.language}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
