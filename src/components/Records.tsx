const Records = ({ recording }: any) => {
  return (
    <div className="my-5">
      <h3>{recording}</h3>
      {recording && (
        <div className="flex justify-center items-center gap-5 mt-3">
          <button className="bg-green-500 py-2 px-5 cursor-pointer rounded outline-none">Play</button>
          <button className="bg-red-500 py-2 px-5 cursor-pointer rounded outline-none">Clear</button>
        </div>
      )}
    </div>
  );
};

export default Records;
