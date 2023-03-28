import logo from "../assets/logo.png";
import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";
import down from "../assets/chevron-down-solid.svg";
import globe from "../assets/globe-solid.svg";
export function NavigationBar() {
  return (
    <nav className="bg-red-50 w-full px-24 flex flex-row items-center justify-between border-black border-b">
      <img
        src={logo}
        className="object-scale-down h-36"
        alt="Safety First Wales logo - a red umbrella reading Safety First Wales over S1W"
      />
      <ul className="flex flex-row gap-10 items-center">
        <li>
          <a href="#" className="hover:text-red-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-300">
            News
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-300">
            Briefing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-300">
            Petition
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-300">
            Get Involved
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-300">
            Contact
          </a>
        </li>
        <li>
          <div className="flex flex-row gap-5 items-start">
            <a href="#">
              <img
                src={instagramLogo}
                alt="Instagram Logo"
                className="h-8 hover:opacity-25"
              />
            </a>
            <a href="#">
              <img
                src={twitterLogo}
                alt="Twitter Logo"
                className="h-8 hover:opacity-25"
              />
            </a>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center gap-1.5 hover:opacity-25"
          >
            <img src={globe} alt="Image of a globe" className="h-5" />
            English
            <img src={down} alt="Down arrow on link" className="h-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
