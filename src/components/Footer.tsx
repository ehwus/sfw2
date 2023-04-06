import { useMemo } from "react";
import paypalLogo from "../assets/paypal.png";
import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";

export function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-red-100 w-full h-64 lg:h-fit px-8 py-6 lg:px-24 lg:py-12 flex flex-col lg:flex-row justify-between items-center mt-auto">
      <aside className="flex flex-col gap-1.5">
        <div className="flex gap-2.5 justify-center">
          <a href="#">
            <img src={instagramLogo} alt="Instagram logo" className="h-8" />
          </a>
          <a href="#">
            <img src={twitterLogo} alt="Twitter logo" className="h-8" />
          </a>
        </div>
        <p>contact@safetyfirstwales.org</p>
      </aside>
      <aside className="order-last lg:order-none">
        <p>© Safety First Wales {currentYear}</p>
      </aside>
      <aside className="flex flex-col order-first lg:order-none">
        <a href="#">
          <img src={paypalLogo} alt="Paypal Logo" className="max-h-12" />
          <p className="bg-black text-white px-1.5 text-center">Donate</p>
        </a>
      </aside>
    </footer>
  );
}
