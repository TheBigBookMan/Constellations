import { HashLink as Link } from "react-router-hash-link";

//* have a fake button on the far right that says "Start your journey" on desktop and on mobile can be on the home screen which looks cool or something

const Nav = () => {
  return (
    <ul className="flex gap-5 items-center">
      <li>
        <Link smooth to="#home">
          Home
        </Link>
      </li>
      <li>
        <Link smooth to="#signs">
          Signs
        </Link>
      </li>
      <li>
        <Link smooth to="#galaxies">
          Galaxies
        </Link>
      </li>
      <li className="hidden md:flex border p-3 rounded-lg bg-gray-900 text-zinc-50 cursor-pointer hover:bg-gray-700 transition-all">
        Start your journey
      </li>
    </ul>
  );
};

export default Nav;
