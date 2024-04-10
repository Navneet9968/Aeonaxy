import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import TopicSubtopic from "../components/TopicSubtopic";
import { useState } from "react";

function InterestPage() {
  const [selected, setSelected] = useState(null);
  const handleClick = (index) => {
    setSelected(index);
  };
  const subjects = [
    "Learning specific skills to advance my career",
    "Exploring new topics I'm interested in",
    "Refreshing my math foundations",
    "Exercising my brain to stay sharp",
    "Something else",
  ];

  return (
    <>
      <ProgressBar progress={20} button="true" backTo={"/"} />
      <TopicSubtopic
        topic="Which are you most interested in?"
        subtopic="Choose just one. This will help us get you started (but won't limit your experience)."
      />
      {subjects.map((subject, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`cursor-pointer `}
        >
          <div
            className={`flex border border-gray-300 p-4 m-1 w-full lg:w-2/5 mx-auto mb-3 rounded-lg ${
              selected === index ? "ring-2 ring-yellow-500 shadow-lg" : ""
            }`}
          >
            <p className="text-base text-gray-700 mr-2"> {subject}</p>
          </div>
        </div>
      ))}
      <Link className="flex justify-center mt-5" to={"/persuasion"}>
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

export default InterestPage;
