import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-6">
      <h1 className="hidden md:flex font-elianto font-bold">CONSTELLATIONS</h1>
      <h1 className="flex md:hidden font-elianto font-bold">A</h1>
      <Nav />
    </div>
  );
};

export default Header;
