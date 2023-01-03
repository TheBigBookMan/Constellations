const Home = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col gap-8 justify-center items-center"
    >
      <h1 className="font-elianto text-4xl">CONSTELLATIONS</h1>
      <button className="font-elianto md:hidden border p-3 rounded-lg bg-gray-900 text-zinc-50 cursor-pointer hover:bg-gray-700 transition-all">
        START YOUR JOURNEY
      </button>
    </div>
  );
};

export default Home;
