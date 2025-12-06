"use client";
import Radio from "@/components/ui/Radio";
import React, { useState } from "react";
import Pagination from "./Pagination";
export const mockAssessment: AssessMent[] = [
  {
    question: "When you learn something new, which activity excites you the most?",
    options: [
      "Creating visual content and organizing information.",
      "Listening to explanations, podcasts, or discussions.",
      "Participating in hands-on activities or experiments.",
      "Thinking deeply, analyzing patterns, or solving problems.",
    ],
    optionType: "option",
  },

  {
    question: "How do you best remember important details?",
    options: [
      "Writing them down or turning them into diagrams.",
      "Repeating them out loud or explaining them to someone.",
      "Doing a physical activity related to the information.",
      "Linking them to concepts or ideas logically.",
    ],
    optionType: "option",
  },

  {
    question: "What method do you prefer when evaluating your understanding?",
    options: [
      "Creating charts, drawings, or visual summaries.",
      "Talking through your understanding with others.",
      "Trying out real-world applications or building prototypes.",
      "Breaking the idea down into frameworks or logic.",
    ],
    optionType: "option",
  },

  {
    question: "Rate how confident you feel about your current learning approach.",
    options: "1-10", // for ranges you can decide how you'll interpret this
    optionType: "range",
  },

  {
    question: "If you could improve one aspect of how you learn, what would it be?",
    options: "", // not used for input type
    optionType: "input",
  },
];

interface AssessMent {
  question: string;
  options: string[] | string;
  optionType: "option" | "input" | "range";
}

const AssesmentCardContainer = () => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  console.log({ index });

  const handleNext = (id?: number) => {
    if (index >= mockAssessment.length - 1) {
      alert("Done");
      return;
    }
    window.scroll({ top: 0, behavior: "smooth" });
    setIndex((prev) => (id ? id : prev + 1));
  };

  const singleMockAssesment = mockAssessment[index];

  if (!singleMockAssesment) return; // tf
  return (
    <div className="w-full bg-white p-5 px-6  rounded-lg mx-auto max-w-lg">
      {/* Header */}
      <div className="space-y-3">
        <div className="space-y-2">
          {/* <h1 className="text-2xl md:text-3xl">Assesment</h1> */}
          <p className="text-md md:text-xl">(Question {index + 1})</p>
        </div>
        <p className="text-[#000000B2] text-sm md:text-lg">{mockAssessment[index].question}</p>
      </div>

      <main className="mt-10">
        <Radio<string> onChange={setValue} value={value}>
          {Array.isArray(singleMockAssesment.options)
            ? singleMockAssesment.options.map((options) => (
                <Radio.Option key={options} value={options}>
                  {options}
                </Radio.Option>
              ))
            : null}
        </Radio>
      </main>

      <button
        onClick={() => handleNext()}
        className="my-6 bg-primary w-full text-white p-3 rounded-lg cursor-pointer"
      >
        Next
      </button>
      <div className="flex items-center justify-center w-full">
        <Pagination<number> index={index} handleIndex={handleNext} length={mockAssessment.length} />
      </div>
    </div>
  );
};

export default AssesmentCardContainer;
