import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

function ListHeadingSub({ icon, subject, sentence }) {
  return (
    <>
      <div className="flex border border-gray-300 p-4 m-1 w-full lg:w-2/5 mx-auto mb-3 rounded-lg">
        <p className="text-base text-gray-700 mr-2"> {subject}</p>
        <p className="text-base text-gray-500"> {sentence}</p>
      </div>
    </>
  );
}

export default ListHeadingSub;
