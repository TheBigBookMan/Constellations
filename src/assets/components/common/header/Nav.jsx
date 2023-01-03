import { HashLink as Link } from "react-router-hash-link";

//* have a fake button on the far right that says "Start your journey" on desktop and on mobile can be on the home screen which looks cool or something

const Nav = () => {
  return (
    <ul className="flex gap-3 items-center">
      <li className="font-elianto text-zinc-50">
        <Link smooth to="#home">
          HOME
        </Link>
      </li>
      <li className="font-elianto text-zinc-50">
        <Link smooth to="#signs">
          SIGNS
        </Link>
      </li>
      <li className="font-elianto text-zinc-50">
        <Link smooth to="#galaxies">
          GALAXIES
        </Link>
      </li>
      <li className="font-elianto text-zinc-50 hidden md:flex border p-3 rounded-lg bg-gray-900 text-zinc-50 cursor-pointer hover:bg-gray-700 transition-all">
        START YOUR JOURNEY
      </li>
    </ul>
  );
};

export default Nav;
