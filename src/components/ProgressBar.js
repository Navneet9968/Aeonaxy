import { Link } from "react-router-dom";

function ProgressBar({ progress, button }) {
  return (
    <div className="relative flex items-center">
      {button && (
        <Link className="absolute left-0 top-0 mt-5" to={"/"}>
          <button
            type="button"
            className="ml-2 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-bold rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 items-center"
          >
            &lt;
          </button>
        </Link>
      )}
      <div className="flex-1">
        <div className="w-full h-1 bg-gray-200 rounded-full progress-bar">
          <div
            className="h-1 bg-green-600 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;