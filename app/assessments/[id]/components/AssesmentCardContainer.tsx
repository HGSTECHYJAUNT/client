import React from "react";

interface AssessMent {
  question: string;
  options: string[] | string;
  optionType: "option" | "input" | "range";
}

const AssesmentCardContainer = () => {
  return (
    <div className="w-full bg-white p-5 px-6 rounded-lg mx-auto max-w-2xl">
      {/* Header */}
      <div className="space-y-3">
        <div className="space-y-2">
          <h1 className="text-5xl">Assesment</h1>
          <p className="text-2xl">(Question 1)</p>
        </div>
        <p className="text-[#000000B2] text-xl">
          When you learn something new, which activity excites you the most?
        </p>
      </div>

      {/* Options */}
      <main></main>
    </div>
  );
};

export default AssesmentCardContainer;
