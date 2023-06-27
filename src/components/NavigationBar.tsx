import { useState } from "react";
import logo from "../assets/logo.png";
import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";
import { Link, NavLink } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import globe from "../assets/globe-solid.svg";
import { useBilingualism } from "../hooks/useBilingalism";

export function NavigationBar() {
  const { language, switchLanguage } = useBilingualism();
  const [showBriefingDropDown, setShowBriefingDropDown] = useState(false);
  const dropdownRef = useOutsideClick<HTMLLIElement>(() =>
    setShowBriefingDropDown(false)
  );

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
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            News
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setShowBriefingDropDown(true)}
          onMouseLeave={() => setShowBriefingDropDown(false)}
          ref={dropdownRef}
        >
          <a
            href="#"
            className="hover:text-red-300"
            onClick={() => setShowBriefingDropDown(!showBriefingDropDown)}
          >
            Briefing
          </a>
          <div
            className={`${
              showBriefingDropDown ? "" : "hidden"
            } absolute flex flex-col bg-red-300 p-3 rounded-md`}
          >
            <Link to="/briefing" className="hover:text-white">
              Briefing
            </Link>
            <Link to="/proposals" className="hover:text-white">
              Proposals for change
            </Link>
          </div>
        </li>
        <li>
          <NavLink
            to="/petition"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            Petition
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/get-involved"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            Get Involved
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            Contact
          </NavLink>
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
          <button
            className="border border-black py-1 px-2.5 flex items-center justify-center gap-1"
            onClick={() => switchLanguage()}
          >
            <>
              <img
                src={globe}
                className="h-5"
                alt="Switch the page's language between English and Welsh"
              />
              {language === "English" ? "Cymraeg" : "English"}
            </>
          </button>
        </li>
      </ul>
    </nav>
  );
}
