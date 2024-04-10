import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import TopicSubtopic from "../components/TopicSubtopic";
import math1 from "../images/math1.png";
import math2 from "../images/math2.png";
import math3 from "../images/math3.png";
import math4 from "../images/math4.png";
import { useState } from "react";

const listItems = [
  { mathImage: math1, mathLevel: "Arithmetic", mathSubLevel: "Introductory" },
  {
    mathImage: math2,
    mathLevel: "Basic Algebra",
    mathSubLevel: "Foundational",
  },
  {
    mathImage: math3,
    mathLevel: "Intermediate Algebra",
    mathSubLevel: "Intermediate",
  },
  { mathImage: math4, mathLevel: "Calculus", mathSubLevel: "Advanced" },
];

function MathComfort() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <ProgressBar progress={50} button="true" backTo={"/interest"} />
      <TopicSubtopic
        topic="What is your math comfort level?"
        subtopic="Choose the highest level you feel confident in - you can always adjust later."
      />
      <div className="flex flex-wrap justify-center gap-4 md:space-x-4">
        {listItems.map((item, index) => (
          <div
            key={index}
            className={`w-full md:w-48 h-48 border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer ${
              selected === index ? "ring-2 ring-yellow-500 shadow-lg" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <img src={item.mathImage} alt="" className="w-auto h-16" />
            <p className="text-sm text-gray-700">{item.mathLevel}</p>
            <h2 className="text-lg text-gray-500">{item.mathSubLevel}</h2>
          </div>
        ))}
      </div>

      <Link
        className="flex justify-center mt-5"
        to={selected == null ? "/math-comfort" : "/quote"}
      >
        <button
          type="button"
          className="px-10 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 "
        >
          Continue
        </button>
      </Link>
    </>
  );
}

export default MathComfort;
