import { useEffect, useState } from "react";

const Volume = ({ setVolume, volume, speed, setSpeed, recording }: any) => {
  return (
    <div
      className={`flex flex-col gap-5  items-start ${
        recording ? "" : "w-[40%]"
      }`}
    >
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        <h4 className="text-xl font-medium">Volume</h4>
        <div className="flex items-center w-full">
          <input
            type="range"
            step={0.01}
            max="1"
            min="0"
            className="w-full h-4 appearance-none rounded-full bg-[#0Dcccc] focus:outline-none"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          <p className="text-sm text-gray-300 lowercase ml-1">Highest</p>
        </div>
      </div>
      {recording && (
        <div>
          <h4 className="text-xl font-medium">Speed</h4>
          <div className="w-full flex item-center">
            <input
              type="range"
              step={0.01}
              max="1.2"
              min="0.1"
              className="w-full h-4 appearance-none rounded-full bg-[#0Dcccc] focus:outline-none"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
            <p className="text-sm text-gray-300 lowercase ml-1">slow</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Volume;
