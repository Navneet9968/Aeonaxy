import { Link } from "react-router-dom";

function BackButton({ backTo }) {
  return (
    <Link className="absolute left-0 top-0 mt-5" to={`${backTo}`}>
      <button
        type="button"
        className="ml-2 text-black bg-white border border-black hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-black font-bold rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center"
      >
        &lt;
      </button>
    </Link>
  );
}

export default BackButton;
