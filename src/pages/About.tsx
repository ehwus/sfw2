import { useBilingualism } from "../hooks/useBilingalism";

export function About() {
  const { language } = useBilingualism();

  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-44 h-11 mx-auto mt-5 lg:m-10">
        {language == "English" ? "ABOUT US" : "AMDANOM NI"}
      </h3>
      <aside className="lg:p-24 flex flex-col gap-8 m-5">
        <p className="text-justify">
          {language == "English"
            ? "Safety First Wales is a coalition of sex workers, health\n" +
              "          professionals, church representatives, anti-racist, anti-poverty,\n" +
              "          anti-violence, migrant and trans rights campaigners -- formed to\n" +
              "          decriminalise sex work in Wales and prioritise sex workers’ safety,\n" +
              "          health, and well-being."
            : "Mae Safety First Wales yn gynghrair o weithwyr rhyw, gweithwyr iechyd proffesiynol, cynrychiolwyr " +
              "eglwysi, ymgyrchwyr gwrth-hiliol, gwrthdlodi, gwrth-drais, mudwyr a hawliau traws -- a ffurfiwyd i " +
              "ddad-droseddoli gwaith rhyw yng Nghymru a blaenoriaethu diogelwch, iechyd, a lles gweithwyr rhyw."}
        </p>
        <p className="text-justify">
          {language == "English"
            ? "Members of our network have direct experience of the harm caused by\n" +
              "          criminalisation, poverty and discrimination. By documenting and\n" +
              "          disseminating these experiences, we aim to transform law and policy so\n" +
              "          that prostitution reduction strategies don’t focus on policing and law\n" +
              "          enforcement but on the provision of benefits, housing and other\n" +
              "          resources for sex workers to empower them to leave and refuse prostitution.\n" +
              "          We want to ensure that it is no longer possible for sex workers'\n" +
              "          voices to be ignored and overlooked in Wales."
            : "Mae gan aelodau ein rhwydwaith brofiad uniongyrchol o'r niwed a achosir gan droseddoli, tlodi a " +
              "gwahaniaethu. Drwy ddogfennu a lledaenu’r profiadau hyn, ein nod yw trawsnewid y gyfraith a pholisi " +
              "fel nad yw strategaethau lleihau puteindra yn canolbwyntio ar blismona a gorfodi'r gyfraith ond ar " +
              "ddarparu budd-daliadau, tai ac adnoddau eraill i weithwyr rhyw i’w grymuso i adael puteindra ac i’w " +
              "wrthod. Rydyn ni am sicrhau nad yw’n bosibl mwyach i leisiau gweithwyr rhyw gael eu hanwybyddu a’u " +
              "distyrru yng Nghymru."}
        </p>
      </aside>
    </section>
  );
}
