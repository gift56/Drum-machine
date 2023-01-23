const Volume = ({ setVolume, volume }: any) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <h4 className="text-xl font-medium">Volume</h4>
      <input
        type="range"
        step={0.01}
        max="1"
        min="0"
        className="w-[50%]"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
};

export default Volume;
