import { useState } from "react";
import TopicSubtopic from "../components/TopicSubtopic";
import learningImage from "../images/learningPath.png";

function LearningPath() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto justify-center h-screen">
        <TopicSubtopic
          topic="Learning paths based on your answers"
          subtopic="Choose one to get started. You can switch anytime."
        />
        <div className="flex space-x-5">
          <div
            className={` w-96 h-44 border-2 rounded-lg flex items-center justify-center cursor-pointer px-2 `}
          >
           <div className="absolute transform -translate-y-20 bg-yellow-500 text-black px-2 py-1 rounded">
              Most Popular
            </div>
            {/* <img src={item.mathImage} alt="" className="w-auto h-16" /> */}
            <p className="text-sm text-gray-700">
              <span className="font-bold">Foundational Math</span> Build your
              foundational skills in algebra, geometry, and probability.
            </p>
            <img src={learningImage} alt="" className="w-auto h-36" />
          </div>
          <div
            className={` w-96 h-44 border-2 rounded-lg flex items-center justify-center cursor-pointer px-2 `}
          >
            {/* <img src={item.mathImage} alt="" className="w-auto h-16" /> */}
            <p className="text-sm text-gray-700">
              <span className="font-bold">Mathematical Thinking</span>
              <br />
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
            <img src={learningImage} alt="" className="w-auto h-36" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LearningPath;
