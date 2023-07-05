import { useState } from "react";
import logo from "../assets/logo.png";
import instagramLogo from "../assets/instagram.svg";
import facebookLogo from "../assets/facebook-circle.svg";
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
          className="object-scale-down max-h-28 mx-auto lg:m-0"
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
            {language === "English" ? "About Us" : "Amdanom ni"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            {language === "English" ? "News" : "Newyddion"}
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
            {language === "English" ? "Briefing" : "Briff"}
          </a>
          <div
            className={`${
              showBriefingDropDown ? "" : "hidden"
            } absolute flex flex-col bg-red-300 p-3 rounded-md`}
          >
            <Link to="/briefing" className="hover:text-white">
              {language === "English" ? "Briefing" : "Briff"}
            </Link>
            <Link to="/proposals" className="hover:text-white">
              {language === "English"
                ? "Proposals for change"
                : "Cynigion i newid"}
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
            {language === "English" ? "Petition" : "Deiseb"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/get-involved"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            {language === "English" ? "Get Involved" : "Cymerwch ran"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-300" : "hover:text-red-300"
            }
          >
            {language === "English" ? "Contact" : "Cysylltwch â ni"}
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.facebook.com/safety1stwales/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebookLogo}
              alt="Instagram Logo"
              className="h-6 hover:opacity-25"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/safety1stwales/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagramLogo}
              alt="Instagram Logo"
              className="h-6 hover:opacity-25"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/safety1stwales"
            target="_blank"
            rel="noreferrer"
          >
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
