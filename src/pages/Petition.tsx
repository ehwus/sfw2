import { useBilingualism } from "../hooks/useBilingalism";
import petitionImage from "../assets/petition-image.jpg";
import petitionImageWelsh from "../assets/petition-image-welsh.jpg";

export function Petition() {
  const { language } = useBilingualism();

  return (
    <section className="w-full flex flex-col">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-40 h-11 mx-auto mt-5 lg:m-10">
        {language === "English" ? "PETITION" : "DEISEB"}
      </h3>
      <aside className="items-center">
        <img
          src={language == "English" ? petitionImage : petitionImageWelsh}
          alt="A poster like promotional image for our petition - it reads 'decriminalise sex work in Wales, safety first!'"
          className="max-h-96 mx-auto"
        />
      </aside>
      <div className="flex flex-col md:flex-row gap-6 items-center mx-auto md:mx-0 justify-items-center mt-3">
        <a
          href={
            language === "English"
              ? "https://forms.gle/tTAobzFzZqW8DLSh9"
              : "https://forms.gle/GaDyVZVuS38Xcv9m6"
          }
          rel="noreferrer"
          target="_blank"
          className="border-2 border-black rounded-full py-2.5 px-6 mx-auto"
        >
          {language === "English"
            ? "CLICK HERE TO SIGN"
            : "CLICIWCH YMA I LOFNODI"}
        </a>
      </div>
      <article className="flex flex-col gap-5 m-5">
        <h4 className="text-lg font-bold">
          {language === "English"
            ? "DECRIMINALISE SEX WORK IN WALES – SAFETY FIRST!"
            : "DAD-DROSEDDOLI GWAITH RHYW YNG NGHYMRU – DIOGELWCH YN GYNTAF!"}
        </h4>
        <p className="text-justify">
          {language === "English"
            ? "Poverty in Wales is increasing, particularly among women and especially single mothers and disabled women."
            : "Mae tlodi ar gynnydd yng Nghymru, yn enwedig ymhlith menywod, ac yn arbennig, mamau sengl a menywod anabl."}
        </p>
        <p className="text-justify">
          {language === "English"
            ? "Most sex workers are mothers working to support families yet are labelled unfit mums and threatened with having their children taken by social services."
            : "Mae’r rhan fwyaf o weithwyr rhyw yn famau sy’n gweithio i gefnogi teuluoedd, ac eto i gyd, maen nhw’n cael eu labelu'n famau sydd ddim yn ffit, lle mae’r gwasanaethau cymdeithasol yn bygwth cymryd eu plant."}
        </p>
        <p className="text-justify">
          {language === "English"
            ? "Prostitution could be reduced by providing viable economic alternatives and affordable housing, living wage benefits, training, pay equity, etc."
            : "Gellir lleihau puteindra drwy ddarparu dewisiadau economaidd amgen hyfyw a thai fforddiadwy, budd-daliadau cyflog byw, hyfforddiant, tegwch o ran cyflog etc."}
        </p>
        <p className="text-justify">
          {language === "English"
            ? "Criminalisation of sex work undermines safety by forcing sex workers to work in isolation and deters them from reporting violence & exploitation for fear of arrest."
            : "Mae dad-droseddoli gwaith rhyw yn tanseilio diogelwch drwy orfodi gweithwyr rhyw i weithio ar eu pen eu hunain a’u hatal rhag riportio trais a chamfanteisio rhag ofn y byddant yn cael eu harestio."}
        </p>
        <p className="text-justify">
          {language === "English"
            ? "Migrant, trans and women of colour disproportionately experience violence and are overly criminalised."
            : "Mae mudwyr, pobl draws a menywod o liw yn profi trais yn anghymesur ac yn cael eu troseddoli’n ormodol."}
        </p>
        <p className="text-justify">
          {language === "English"
            ? "Police resources would be better spent tackling violent crimes instead of policing consenting sex."
            : "Byddai'n well gwario adnoddau'r heddlu ar daclo troseddau treisgar yn hytrach na phlismona rhyw drwy gysyniad."}
        </p>
        <p className="text-justify">
          {language === "English"
            ? "New Zealand has successfully decriminalised prostitution with verifiable improvements in sex workers’ safety, health and well-being."
            : "Mae Seland Newydd wedi dad-droseddoli puteindra yn llwyddiannus gyda gwelliannau y gellir eu gwirio o ran diogelwch, iechyd a lles gweithwyr rhyw."}
        </p>
        <p className="text-justify">
          {language === "English"
            ? "Decriminalisation is supported by prestigious organisations such as the Royal College of Nursing, Joint Council for the Welfare of Immigrants, Freedom United, Women Against Rape in the UK and internationally Amnesty International, the World Health Organization, Human Rights Watch, UNAIDS, International Lesbian, Gay, Bisexual, Trans and Intersex Association, Global Alliance Against Traffic in Women."
            : "Cefnogir dad-droseddoli gan sefydliadau uchel eu parch fel y Coleg Nyrsio Brenhinol, Y Cyd-gyngor er Lles Mewnfudwyr, Freedom United, Women Against Rape yn y DU, ac yn rhyngwladol  Amnesty International, Sefydliad Iechyd y Byd, Human Rights Watch, UNAIDS, International Lesbian, Gay, Bisexual, Trans and Intersex Association, Global Alliance Against Traffic in Women."}
        </p>
        <h5 className="text-lg font-bold">
          {language === "English"
            ? "THEREFORE, WE DEMAND:"
            : "FELLY, RYDYN NI’N GALW AM:"}
        </h5>
        <ol className="list-decimal px-4 text-justify">
          <li>
            {language === "English"
              ? "Decriminalisation of sex work to improve sex workers’ health, safety and welfare."
              : "Dad-droseddoli gwaith rhyw i wella diogelwch, iechyd a lles gweithwyr rhyw."}
          </li>
          <li>
            {language === "English"
              ? "Financial support for sex workers wishing to exit sex work."
              : "Cymorth ariannol i weithwyr rhyw sy’n dymuno rhoi’r gorau i waith rhyw."}
          </li>
        </ol>
        <p className="italic text-justify">
          {language === "English"
            ? "Petition issued by Safety First Wales – a coalition of sex workers, health professionals, church representatives, anti-racist, anti-poverty, anti-violence, migrant and trans rights campaigners -- formed to decriminalise sex work in Wales and prioritise sex workers’ safety, health, and well-being."
            : "Cyhoeddwyd y ddeiseb gan Diogelwch yn Gyntaf Cymru – clymblaid o weithwyr rhyw, gweithwyr iechyd proffesiynol, cynrychiolwyr yr eglwys, ymgyrchwyr gwrth-hiliaeth, gwrth-dlodi, gwrth-drais, hawliau mudwyr a phobl draws - a ffurfiwyd i ddad-droseddoli gwaith rhyw yng Nghymru ac i flaenoriaethu diogelwch, iechyd a lles gweithwyr rhyw."}
        </p>
        {navigator.share && (
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Sign the Safety First Wales petition!",
                  text: `Safety First Wales (SFW) – a coalition of sex workers, health
          professionals, church representatives, anti-poverty, anti-violence,
          and migrant and trans rights campaigners -- formed to decriminalise
          sex work in Wales and prioritise sex workers’ safety, health, and
          well-being.`,
                  url: window.location.href,
                });
              }
            }}
            className="border-2 border-black rounded-full py-2.5 px-6 mx-auto"
          >
            {language === "English"
              ? "SHARE ON SOCIAL MEDIA"
              : "RHANNWCH AR GYFRYNGAU CYMDEITHASOL"}
          </button>
        )}
      </article>
    </section>
  );
}
