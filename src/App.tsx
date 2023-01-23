import { useState } from "react";
import Pad from "./components/Pad";
import Records from "./components/Records";
import Volume from "./components/Volume";
import { audioSound } from "./data/audioSound";

const App = () => {
  const [active, setActive] = useState(false);
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");

  return (
    <main className="bg-[#0C131A] w-full text-white h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Drum Machine</h2>
        {audioSound.map((clip) => (
          <Pad
            clip={clip}
            key={clip.id}
            setActive={setActive}
            active={active}
            volume={volume}
            setRecording={setRecording}
          />
        ))}
        <Volume volume={volume} setVolume={setVolume} />
        <Records recording={recording} setRecording={setRecording} />
      </div>
    </main>
  );
};

export default App;
