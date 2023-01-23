import { useEffect } from "react";

const Pad = ({ clip, active, setActive }: any) => {
  const handleKeyPress = (e: any) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const playSound = () => {
    const audioTag: any = document.getElementById(clip.keyTrigger);

    audioTag.currentTime = 0;
    audioTag.play();
  };

  return (
    <button
      onClick={playSound}
      className={`py-4 px-8 outline-none border m-3 bg-gray-300 rounded-md cursor-pointer text-gray-800 text-lg font-medium `}
    >
      <audio id={clip.keyTrigger} src={clip.url} className="" />
      {clip.keyTrigger}
    </button>
  );
};

export default Pad;
