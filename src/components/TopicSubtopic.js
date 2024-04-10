
function TopicSubtopic({ topic, subtopic }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen ">
        <div className="max-w-7xl w-full p-8 text-center">
          <h1 className="text-5xl font-semibold text-stone-700 mb-4">{topic}</h1>
          <p className="text-base text-gray-700"> {subtopic}</p>
        </div>
      </div>
    </>
  );
}

export default TopicSubtopic;