//* have a fake button on the far right that says "Start your journey" on desktop and on mobile can be on the home screen which looks cool or something

const Nav = () => {
  return (
    <ul className="flex gap-5 items-center">
      <li>Home</li>
      <li>Signs</li>
      <li className="hidden md:flex border p-3 rounded-lg bg-gray-900 text-zinc-50 cursor-pointer hover:bg-gray-700 transition-all">
        Start your journey
      </li>
    </ul>
  );
};

export default Nav;
