import { useState } from "react";
import Pad from "./components/Pad";
import Records from "./components/Records";
import Volume from "./components/Volume";
import { audioSound } from "./data/audioSound";

const App = () => {
  const [active, setActive] = useState(false);
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");
  const [speed, setSpeed] = useState(0.5);

  const playRecording = () => {
    let playingAudio = recording.split(" ");
    let index = 0;
    const playing = setInterval(() => {
      const audioTag: any = document.getElementById(playingAudio[index]);
      audioTag.currentTime = 0;
      audioTag.play();
      audioTag.volume = volume;
      index++;
    }, speed * 600);

    setTimeout(
      () => clearInterval(playing),
      600 * speed * playingAudio.length - 1
    );
  };

  return (
    <main className="bg-[#0C131A] w-full text-white min-h-screen flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col w-full items-center justify-center">
        <h2 className="text-2xl font-semibold">Drum Machine</h2>
        <div className="grid grid-cols-3">
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
        </div>
      </div>
      <h3>{recording}</h3>
      <div className="flex w-full items-center justify-center gap-5">
        <Volume
          volume={volume}
          setVolume={setVolume}
          speed={speed}
          setSpeed={setSpeed}
          recording={recording}
        />
        <Records
          recording={recording}
          setRecording={setRecording}
          playRecording={playRecording}
        />
      </div>
    </main>
  );
};

export default App;
