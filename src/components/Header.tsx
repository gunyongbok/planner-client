import { HiMoon, HiSun } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center relative rounded-t-2xl h-12 bg-green-400 w-full pr-4 pl-4 box-border">
        <button>{<HiMoon />}</button>
        <div className="flex justify-between w-7/12">
          <button>all</button>
          <button>completed</button>
          <button>active</button>
        </div>
      </header>
    </>
  );
};

export default Header;
