import { useMemo } from "react";
import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";

export function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-red-100 w-full h-64 lg:h-fit px-8 py-6 lg:px-24 lg:py-12 flex flex-col lg:flex-row justify-around items-center mt-auto">
      <aside className="flex flex-col gap-1.5">
        <div className="flex gap-2.5 justify-center">
          <a
            href="https://www.instagram.com/safety1stwales/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramLogo} alt="Instagram logo" className="h-8" />
          </a>
          <a
            href="https://twitter.com/safety1stwales"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterLogo} alt="Twitter logo" className="h-8" />
          </a>
        </div>
        <p>safety1stwales@gmail.com</p>
      </aside>
      <aside className="order-last lg:order-none">
        <p>© Safety First Wales {currentYear}</p>
      </aside>
    </footer>
  );
}
