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
        <div class=" flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          <div class="w-full md:w-96 h-44 border-2 rounded-lg flex items-center justify-center cursor-pointer px-2 relative">
            <div class="absolute top-0 transform -translate-y-5 bg-yellow-500 text-black px-2 py-1 rounded">
              Most Popular
            </div>
            <p class="text-sm text-gray-700 text-center">
              <span class="font-bold">Foundational Math</span> Build your
              foundational skills in algebra, geometry, and probability.
            </p>
            <img src={learningImage} alt="" class="w-auto h-36 mt-2 md:mt-0" />
          </div>
          <div class="w-full md:w-96 h-44 border-2 rounded-lg flex items-center justify-center cursor-pointer px-2 relative">
            <p class="text-sm text-gray-700 text-center">
              <span class="font-bold">Mathematical Thinking</span>
              <br />
              Build your foundational skills in algebra, geometry, and
              probability.
            </p>
            <img src={learningImage} alt="" class="w-auto h-36 mt-2 md:mt-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LearningPath;
