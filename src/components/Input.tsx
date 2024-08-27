import React from "react";

const Input = () => {
  return (
    <div className="flex justify-end items-center relative rounded-b-2xl h-14 bg-green-400 w-full pr-4 pl-4 box-border">
      <input
        type="text"
        className="h-2/3 w-full rounded-l-xl pr-2 pl-2 box-border"
        placeholder="Add Todo"
      />
      <button className="w-1/6 h-2/3 rounded-r-xl bg-yellow-300 ">Add</button>
    </div>
  );
};

export default Input;
