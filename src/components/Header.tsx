import { HiMoon, HiSun } from "react-icons/hi";
import useStateStore from "../store/store";

const Header = () => {
  const { currentState, setCurrentState, isDarkMode, toggleDarkMode } =
    useStateStore();

  const states = ["all", "completed", "active"];

  return (
    <header
      className={`flex justify-between items-center relative rounded-t-2xl h-12 w-full pr-4 pl-4 box-border ${
        isDarkMode ? "bg-dark-mode-header" : "bg-green-400"
      }`}
    >
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <HiSun className="text-white" /> : <HiMoon />}
      </button>
      <div className="flex justify-between w-7/12">
        {states.map((state) => (
          <button
            key={state}
            onClick={() => setCurrentState(state)}
            className={`
                ${
                  currentState === state
                    ? "text-bubble-gum"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }
              `}
          >
            {state}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
