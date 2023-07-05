import { useBilingualism } from "../hooks/useBilingalism";

export function News() {
  const { language } = useBilingualism();

  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-40 h-11 mx-auto mt-5 lg:m-10">
        {language == "English" ? "NEWS" : "NEWYDDION"}
      </h3>
      <article className="lg:p-24 flex flex-col gap-5 m-5">
        <h4 className="text-lg font-bold">
          {language == "English"
            ? "Introducing Safety First Wales!"
            : "Cyflwyno Diogelwch yn Gyntaf Cymru!"}
        </h4>
        <h5 className="italic">1 July 2023</h5>
        <p className="text-justify">
          {language == "English"
            ? "The Safety First Wales coalition has launched this month aiming to\n" +
              "          decriminalise sex work and ensure that sex workers’ safety, health,\n" +
              "          and well-being are prioritised in Wales."
            : "Mae clymblaid Diogelwch yn Gyntaf Cymru wedi lansio fis yma gyda’r nod o ddad-droseddoli " +
              "gwaith rhyw ac i sicrhau bod diogelwch, iechyd a lles gweithwyr rhyw yn cael eu " +
              "blaenoriaethu yng Nghymru."}
        </p>
        <p className="text-justify">
          {language == "English"
            ? "Our briefing paper documents the experiences of sex workers in our " +
              "network and contains proposals for change, many of which could be " +
              "immediately implemented by the Senedd."
            : "Mae ein papur briffio yn nodi profiadau gweithwyr rhyw yn ein rhwydwaith ac yn cynnwys " +
              "cynigion ar gyfer newid, y gallai nifer ohonyn nhw gael eu gweithredu ar unwaith gan y Senedd."}
        </p>
        <p className="text-justify">
          {language == "English"
            ? "Please support us by signing and sharing our petition that demands:"
            : "Cefnogwch ni drwy lofnodi a rhannu’r ddeiseb sy’n galw am:"}
        </p>
        <ol className="list-decimal px-4 text-justify ">
          <li>
            {language == "English"
              ? "The decriminalisation of sex work to improve sex workers’ health, " +
                "safety and welfare."
              : "Dad-droseddoli gwaith rhyw i wella diogelwch, iechyd a lles gweithwyr rhyw."}
          </li>
          <li>
            {language == "English"
              ? "The provision of financial support for sex workers wishing to exit " +
                "sex work."
              : "Y ddarpariaeth cymorth ariannol i weithwyr rhyw sy’n dymuno rhoi’r gorau i waith rhyw."}
          </li>
        </ol>
        <p className="text-justify">
          {language == "English"
            ? "Please check back for more news and updates soon."
            : "Cadwch lygad am fwy o newyddion a diweddariadau yn fuan."}
        </p>
      </article>
    </section>
  );
}
