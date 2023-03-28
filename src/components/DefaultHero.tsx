import petitionImage from "../assets/petition-image.png";
import { BlackBox } from "./BlackBox";
export function DefaultHero() {
  return (
    <section className="w-full bg-red-50 px-24 lg:flex lg:flex-row">
      <img
        src={petitionImage}
        alt="A poster like promotional image for our petition - it reads 'decriminalise sex work in Wales, safety first!'"
        className="max-h-96 p-12"
      />
      <aside className="flex flex-col p-12">
        <h3 className="font-bold text-xl">#SAFETYFIRSTWALES</h3>
        <p className="mt-5">
          Safety First Wales (SFW) – a coalition of sex workers, health
          professionals, church representatives, anti-poverty, anti-violence,
          and migrant and trans rights campaigners -- formed to decriminalise
          sex work in Wales and prioritise sex workers’ safety, health, and
          well-being.
        </p>
        <div className="flex gap-28 mt-14">
          <BlackBox text="Learn more" />
          <BlackBox text="Sign the petition" />
        </div>
      </aside>
    </section>
  );
}
