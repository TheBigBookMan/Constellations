const Home = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col gap-8 justify-center items-center  bg-Space bg-cover"
    >
      <h1 className="font-elianto text-2xl md:text-6xl text-zinc-50">
        CONSTELLATIONS
      </h1>
      <button className="font-elianto md:hidden text-zinc-50 border p-3 rounded-lg bg-gray-900 text-zinc-50 cursor-pointer hover:bg-gray-700 transition-all">
        START YOUR JOURNEY
      </button>
    </div>
  );
};

export default Home;
