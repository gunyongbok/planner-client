import { useState } from "react";
import { HiMoon } from "react-icons/hi";

const Header = () => {
  const [currentState, setCurrentState] = useState<string>("all");

  const states = ["all", "completed", "active"];

  return (
    <header className="flex justify-between items-center relative rounded-t-2xl h-12 bg-green-400 w-full pr-4 pl-4 box-border">
      <button>{<HiMoon />}</button>
      <div className="flex justify-between w-7/12">
        {states.map((state) => (
          <button
            key={state}
            onClick={() => setCurrentState(state)}
            className={currentState === state ? "text-bubble-gum" : ""}
          >
            {state}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
