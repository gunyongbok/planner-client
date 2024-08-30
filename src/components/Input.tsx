import React, { useState } from "react";

const Input = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  console.log(todo);

  return (
    <div className="flex justify-end items-center relative rounded-b-2xl h-14 bg-green-400 w-full pr-4 pl-4 box-border">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        className="h-2/3 w-full rounded-l-xl pr-2 pl-2 box-border"
        placeholder="Add Todo"
      />
      <button
        onClick={handleAddTodo}
        className="w-1/6 h-2/3 rounded-r-xl bg-bubble-gum"
      >
        Add
      </button>
    </div>
  );
};

export default Input;
