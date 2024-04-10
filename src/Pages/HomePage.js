import { Link } from "react-router-dom";
import ListHeadingSub from "../components/ListHeadingSub";
import ProgressBar from "../components/ProgressBar";
import TopicSubtopic from "../components/TopicSubtopic";
import { useState } from "react";

function HomePage() {
  const [selected, setSelected] = useState(null);
  const handleClick = (index) => {
    setSelected(index);
  };
  const listItems = [
    { subject: "Student", sentence: "or soon to be enrolled." },
    { subject: "Professional", sentence: "pursuing a career." },
    { subject: "Parent", sentence: "or guardian of a student." },
    { subject: "Teacher", sentence: "or tutor." },
    { subject: "Lifelong learner", sentence: "out of school." },
    // add more items as needed
  ];
  return (
    <>
      <ProgressBar progress={10} />
      <TopicSubtopic
        topic="Which describes you best?"
        subtopic="This will help us personalize your experience."
      />
      {listItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`cursor-pointer `}
        >
          <div className={`cursor-pointer`}>
            <div
              className={`flex border border-gray-300 p-4 m-1 w-full lg:w-2/5 mx-auto mb-3 rounded-lg  ${
                selected === index ? "ring-2 ring-yellow-500 shadow-lg" : ""
              } `}
            >
              <p className="text-base text-gray-700 mr-2"> {item.subject}</p>
              <p className="text-base text-gray-500"> {item.sentence}</p>
            </div>
          </div>
        </div>
      ))}

      {/* <ListHeadingSub subject="Student" sentence="or soon to be enrolled." />
      <ListHeadingSub subject="Professional" sentence="pursuing a career." />
      <ListHeadingSub subject="Parent" sentence="of a school-aged child" />
      <ListHeadingSub subject="Lifelong-learner" sentence="" />
      <ListHeadingSub subject="Teacher" sentence="" />
      <ListHeadingSub subject="Other" sentence="" /> */}
      <Link className="flex justify-center mt-5" to={"/interest"}>
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

export default HomePage;
