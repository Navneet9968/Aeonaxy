import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import weightImage from "../images/weight.png";

function PersuasionPage() {
  return (
    <>
      <ProgressBar progress={30} button="true" backTo={"/interest"} />

      <div class="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-52 mt-14">
        <img src={weightImage} alt="" class="mb-4 md:mb-0 md:mr-4" />
        <div class="ml-0 md:ml-12 max-w-md lg:max-w-lg">
          <h1 class="text-4xl font-semibold text-stone-900 mb-4">
            You're in the right place
          </h1>
          <p class="text-base text-gray-700">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>

      <Link className="flex justify-center mt-5" to={"/math-comfort"}>
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

export default PersuasionPage;
