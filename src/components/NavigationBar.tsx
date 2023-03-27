import logo from "../assets/logo.png";
export function NavigationBar() {
  return (
    <nav className="bg-red-50 w-full px-24 py-8 flex flex-row items-center justify-between border-black border-b">
      <img
        src={logo}
        className="object-scale-down h-36"
        alt="Safety First Wales logo - a red umbrella reading Safety First Wales over S1W"
      />
      <ul className="flex flex-row gap-5">
        <li>
          <a href="#" className="hover:text-gray-50">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-50">
            News
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-50">
            Briefing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-50">
            Petition
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-50">
            Get Involved
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-50">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
