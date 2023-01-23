const Volume = ({ setVolume, volume, speed, setSpeed, recording }: any) => {
  return (
    <div
      className={`flex flex-col gap-5  items-start ${
        recording ? "" : "w-[40%]"
      }`}
    >
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <h4 className="text-xl font-medium">Volume</h4>
        <input
          type="range"
          step={0.01}
          max="1"
          min="0"
          className="w-full"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      {recording && (
        <div>
          <h4 className="text-xl font-medium">Speed</h4>
          <input
            type="range"
            step={0.01}
            max="1.2"
            min="0.1"
            className="w-full"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Volume;
