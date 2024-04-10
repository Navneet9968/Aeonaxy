import { Link } from "react-router-dom";
import BackButton from "./BackButton";

function ProgressBar({ progress, button, backTo }) {
  return (
    <div className="relative flex items-center">
      {button && <BackButton backTo={backTo} />}
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
