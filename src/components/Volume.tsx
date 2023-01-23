const Volume = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-xl font-medium">Volume</h4>
      <input type="range" step={0.01} />
    </div>
  );
};

export default Volume;
