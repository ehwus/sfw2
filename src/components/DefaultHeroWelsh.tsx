import { Link } from "react-router-dom";
import petitionImageWelsh from "../assets/petition-image-welsh.jpg";

export function DefaultHeroWelsh() {
  return (
    <section className="w-full bg-red-50 lg:px-24 lg:flex lg:flex-row mx-auto">
      <img
        src={petitionImageWelsh}
        alt="A poster like promotional image for our petition - it reads 'decriminalise sex work in Wales, safety first!'"
        className="max-h-96 lg:p-12 mx-auto"
      />
      <aside className="flex flex-col lg:p-12 p-8">
        <h3 className="font-bold text-xl">#SAFETYFIRSTWALES</h3>
        <p className="mt-5 text-justify">
          Mae Safety First Wales yn gynghrair o weithwyr rhyw, gweithwyr iechyd
          proffesiynol, cynrychiolwyr eglwysi, ymgyrchwyr gwrth-hiliol,
          gwrthdlodi, gwrth-drais, mudwyr a hawliau traws -- a ffurfiwyd i
          ddad-droseddoli gwaith rhyw yng Nghymru a blaenoriaethu diogelwch,
          iechyd, a lles gweithwyr rhyw.
        </p>
        <div className="flex flex-wrap gap-5 mt-14 justify-center">
          <Link
            to="/about"
            className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white hover:opacity-75 w-56"
          >
            Dysgwch fwy
          </Link>
          <Link
            to="/petition"
            className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white hover:opacity-75 w-56"
          >
            Llofnodwch y ddeiseb
          </Link>
        </div>
      </aside>
    </section>
  );
}
