import { Link } from "react-router-dom";
import petitionImage from "../assets/petition-image.png";

export function DefaultHero() {
  return (
    <section className="w-full bg-red-50 lg:px-24 lg:flex lg:flex-row mx-auto">
      <img
        src={petitionImage}
        alt="A poster like promotional image for our petition - it reads 'decriminalise sex work in Wales, safety first!'"
        className="max-h-96 lg:p-12 mx-auto"
      />
      <aside className="flex flex-col lg:p-12 p-8">
        <h3 className="font-bold text-xl">#SAFETYFIRSTWALES</h3>
        <p className="mt-5 text-justify">
          Safety First Wales (SFW) – a coalition of sex workers, health
          professionals, church representatives, anti-poverty, anti-violence,
          and migrant and trans rights campaigners -- formed to decriminalise
          sex work in Wales and prioritise sex workers’ safety, health, and
          well-being.
        </p>
        <div className="flex flex-wrap gap-5 mt-14 justify-center">
          <Link
            to="/about"
            className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white hover:opacity-75"
          >
            Learn more
          </Link>
          <button className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white hover:opacity-75">
            Sign the petition
          </button>
        </div>
      </aside>
    </section>
  );
}
