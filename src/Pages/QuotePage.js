import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import JoyBlob from "../images/JoyBlob.png";
import StarIcon from "../components/StarIcon";

function QuotePage() {
  return (
    <>
      <ProgressBar progress={100} button="true" backTo={"/math-comfort"} />

      <div class="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-52 mt-14">
        <img src={JoyBlob} alt="" class="mb-4 md:mb-0 md:mr-4" />
        <div class="ml-0 md:ml-12 max-w-md lg:max-w-lg">
          <h1 class="text-4xl font-semibold text-stone-900 mb-8">
            You're on your way!
          </h1>
          <div className="flex my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p class="text-base text-gray-700 italic">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
          <br />
          <p className="italic text-base text-gray-700">- Jacob S.</p>
        </div>
      </div>

      <Link className="flex justify-center mt-5" to={"/loading"}>
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

export default QuotePage;
