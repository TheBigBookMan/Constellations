import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-6 md:p-12 absolute top-0 w-full h-[60px] z-1">
      <h1 className="hidden md:flex font-elianto font-bold text-zinc-50 text-xl">
        CONSTELLATIONS
      </h1>
      <h1 className="flex md:hidden font-elianto font-bold text-zinc-50 text-3xl">
        A
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
