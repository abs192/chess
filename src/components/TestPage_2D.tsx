export const TestPage_2D = () => {
  return (
    <div className="container flex flex-col w-full rounded-xl shadow border p-8 m-12">
      <p className="text-3xl text-gray-700 font-bold mb-5">Chess!</p>
      <div className="flex flex-col gap-2">
        <input className="text-gray-500 text-lg h-24 w-96 rounded-xl border border-black" />
        <button className="w-24 text-gray-500 text-lg border rounded-xl border-black">
          Load pgn
        </button>
      </div>
    </div>
  );
};
