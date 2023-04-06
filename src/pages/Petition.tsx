export function Petition() {
  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col md:flex-row gap-6 items-center mx-auto md:mx-0 justify-items-center">
        <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-40 h-11 mx-auto mt-5 lg:m-10">
          PETITION
        </h3>
        <a
          href="https://forms.gle/tTAobzFzZqW8DLSh9"
          rel="noreferrer"
          target="_blank"
          className="border-2 border-black rounded-full py-2.5 px-6 hover:opacity-75"
        >
          CLICK HERE TO SIGN
        </a>
      </div>
      <article className="flex flex-col gap-5 m-5">
        <h4 className="text-lg font-bold">
          DECRIMINALISE SEX WORK IN WALES – SAFETY FIRST!
        </h4>
        <p className="text-justify">
          Poverty in Wales is increasing, particularly among women and
          especially single mothers and disabled women.
        </p>
        <p className="text-justify">
          Most sex workers are mothers working to support families yet are
          labelled unfit mums and threatened with having their children taken by
          social services.
        </p>
        <p className="text-justify">
          Prostitution could be reduced by providing viable economic
          alternatives and affordable housing, living wage benefits, training,
          pay equity, etc.
        </p>
        <p className="text-justify">
          Criminalisation of sex work undermines safety by forcing sex workers
          to work in isolation and deters them from reporting violence &
          exploitation for fear of arrest.
        </p>
        <p className="text-justify">
          Migrant, trans and women of colour disproportionately experience
          violence and are overly criminalised.
        </p>
        <p className="text-justify">
          Police resources would be better spent tackling violent crimes instead
          of policing consenting sex.
        </p>
        <p className="text-justify">
          New Zealand has successfully decriminalised prostitution with
          verifiable improvements in sex workers’ safety, health and well-being.
        </p>
        <p className="text-justify">
          Decriminalisation is supported by prestigious organisations such as
          the Royal College of Nursing, Joint Council for the Welfare of
          Immigrants, Freedom United, Women Against Rape in the UK and
          internationally Amnesty International, the World Health Organization,
          Human Rights Watch, UNAIDS, International Lesbian, Gay, Bisexual,
          Trans and Intersex Association, Global Alliance Against Traffic in
          Women.
        </p>
        <h5 className="text-lg font-bold">THEREFORE, WE DEMAND:</h5>
        <ol className="list-decimal px-4 text-justify">
          <li>
            Decriminalisation of sex work to improve sex workers’ health, safety
            and welfare.
          </li>
          <li>Financial support for sex workers wishing to exit sex work.</li>
        </ol>
        <p className="italic text-justify">
          Petition issued by Safety First Wales – a coalition of sex workers,
          health professionals, church representatives, anti-racist,
          anti-poverty, anti-violence, migrant and trans rights campaigners --
          formed to decriminalise sex work in Wales and prioritise sex workers’
          safety, health, and well-being.
        </p>
        {navigator.share && navigator.canShare() && (
          <button
            onClick={() => {
              navigator.share({
                title: "Sign the Safety First Wales petition!",
                text: `Safety First Wales (SFW) – a coalition of sex workers, health
          professionals, church representatives, anti-poverty, anti-violence,
          and migrant and trans rights campaigners -- formed to decriminalise
          sex work in Wales and prioritise sex workers’ safety, health, and
          well-being.`,
                url: window.location.href,
              });
            }}
            className="border-2 border-black rounded-full py-2.5 px-6 mx-auto"
          >
            SHARE ON SOCIAL MEDIA
          </button>
        )}
      </article>
    </section>
  );
}
