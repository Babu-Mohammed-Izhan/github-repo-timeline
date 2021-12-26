interface MainpageProps {
  username: string;
}

const Mainpage = ({ username }: MainpageProps) => {
  return (
    <div className="flex items-center justify-center flex-col pt-10 w-11/12 md:w-4/5 m-auto"></div>
  );
};

export default Mainpage;
