import { useMemo } from "react";
import paypalLogo from "../assets/paypal.png";
import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";

export function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="w-full bg-red-50 px-24 py-12 flex justify-between items-center">
      <aside className="flex flex-col gap-0.5">
        <p>contact@safetyfirstwales.org</p>
        <div className="flex gap-2.5 justify-center">
          <a href="#">
            <img src={instagramLogo} alt="Instagram logo" className="h-8" />
          </a>
          <a href="#">
            <img src={twitterLogo} alt="Twitter logo" className="h-8" />
          </a>
        </div>
      </aside>
      <aside>
        <p>© Safety First Wales {currentYear}</p>
      </aside>
      <aside className="flex flex-col">
        <a href="#">
          <img src={paypalLogo} alt="Paypal Logo" className="max-h-12" />
          <p className="bg-black text-white px-1.5 text-center">Donate</p>
        </a>
      </aside>
    </footer>
  );
}
