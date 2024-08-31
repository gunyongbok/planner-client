import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <div className="flex flex-col	justify-between w-80 h-96 bg-white text-black rounded-2xl">
      <Header />
      <Input />
    </div>
  );
}

export default App;
