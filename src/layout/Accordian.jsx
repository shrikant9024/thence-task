import React, { useState } from "react";

const Accordian = ({ title, description }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className="flex justify-between w-full px-6"
      >
        <span className="text-xl">{title}</span>
        {accordianOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-neutral-500 text-s ${
          accordianOpen
            ? "grid-rows=[1fr] opacity-100 px-6 py-1 border-b-[0.5px] border-gray-400 mt-4 "
            : "grid-rows-[0fr] opacity-0 px-6 py-1 border-b-1 border-gray-600"
        }`}
      >
        <div className="overflow-hidden">{description}</div>
      </div>
    </div>
  );
};

export default Accordian;
