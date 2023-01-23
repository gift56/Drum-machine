import { useState } from "react";
import Pad from "./components/Pad";
import { audioSound } from "./data/audioSound";

const App = () => {
  const [active, setActive] = useState(false);

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
          />
        ))}
      </div>
    </main>
  );
};

export default App;
