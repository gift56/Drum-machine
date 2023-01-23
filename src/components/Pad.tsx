import React from "react";

const Pad = ({ clip }: any) => {
  const playSound = () => {};

  return (
    <button
      onClick={playSound}
      className={`py-4 px-8 outline-none border m-3 bg-gray-300 rounded-md cursor-pointer text-gray-800 text-lg font-medium`}
    >
      <audio id={clip.keyTrigger} src={clip.url} className="" />
      {clip.keyTrigger}
    </button>
  );
};

export default Pad;
