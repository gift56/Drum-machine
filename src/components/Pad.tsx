import { useEffect } from "react";

interface Iprop {
  clip: any;
  volume: number;
  setRecording: any;
  setActive: any;
  active: boolean;
}

const Pad = ({ clip, volume, setRecording, active, setActive }: Iprop) => {
  console.log(clip);
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
    audioTag.volume = volume;
    setRecording((prev: any) => prev + clip.keyTrigger + " ");
  };

  return (
    <button
      onClick={playSound}
      className={`py-4 px-8 outline-none border m-3 bg-[#0DCCCC] border-[#0DCCCC] rounded-md cursor-pointer text-gray-800 text-lg font-medium `}
    >
      <audio id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </button>
  );
};

export default Pad;
