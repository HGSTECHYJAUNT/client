"use client";
import Radio from "@/components/ui/Radio";
import React, { useState } from "react";
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
  const [value, setValue] = useState("1");
  return (
    <div className="w-full bg-white p-5 px-6  rounded-lg mx-auto max-w-2xl">
      {/* Header */}
      <div className="space-y-3">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl">Assesment</h1>
          <p className="text-md md:text-xl">(Question 1)</p>
        </div>
        <p className="text-[#000000B2] text-sm md:text-lg">
          When you learn something new, which activity excites you the most?
        </p>
      </div>

      <main className="mt-10">
        <Radio<string> onChange={setValue} value={value}>
          <Radio.Option value={"1"}>
            Creating visual content and organizing information.
          </Radio.Option>
          <Radio.Option value={"2"}>
            Creating visual content and organizing information.
          </Radio.Option>
          <Radio.Option value={"3"}>
            Creating visual content and organizing information.
          </Radio.Option>
          <Radio.Option value={"4"}>
            Creating visual content and organizing information.
          </Radio.Option>
        </Radio>
              </main>
              
              <button className="my-6 bg-primary w-full text-white p-3 rounded-lg cursor-pointer">Next</button>
    </div>
  );
};

export default AssesmentCardContainer;
