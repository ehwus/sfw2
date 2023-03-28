import logo from "../assets/logo.png";
import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";
import down from "../assets/chevron-down-solid.svg";
import globe from "../assets/globe-solid.svg";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <nav className="w-full lg:px-24 lg:flex lg:flex-row items-center justify-between border-black border-b">
      <Link to="/">
        <img
          src={logo}
          className="object-scale-down max-h-36 mx-auto lg:m-0"
          alt="Safety First Wales logo - a red umbrella reading Safety First Wales over S1W"
        />
      </Link>
      <ul className="flex flex-row flex-wrap lg:gap-5 gap-3 items-center justify-center mx-5 mb-2.5 lg:mb-0">
        <li>
          <Link to="/about" className="hover:text-red-300">
            About Us
          </Link>
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
          <Link to="/get-involved" className="hover:text-red-300">
            Get Involved
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-red-300">
            Contact
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={instagramLogo}
              alt="Instagram Logo"
              className="h-6 hover:opacity-25"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={twitterLogo}
              alt="Twitter Logo"
              className="h-6 hover:opacity-25"
            />
          </a>
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
