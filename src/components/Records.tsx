const Records = ({
  recording,
  setRecording,
  playRecording,
  speed,
  setSpeed,
}: any) => {
  return (
    <div className="my-5">
      <h3>{recording}</h3>
      {recording && (
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex justify-center items-center gap-5 mt-3">
            <button
              onClick={playRecording}
              className="bg-green-500 py-2 px-5 cursor-pointer rounded outline-none"
            >
              Play
            </button>
            <button
              onClick={() => setRecording("")}
              className="bg-red-500 py-2 px-5 cursor-pointer rounded outline-none"
            >
              Clear
            </button>
          </div>

          <h4 className="text-xl font-medium">Speed</h4>
          <input
            type="range"
            step={0.01}
            max="1.2"
            min="0.1"
            className="w-[50%]"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Records;
