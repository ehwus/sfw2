export function News() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-40 h-11 mx-auto mt-5 lg:m-10">
        NEWS
      </h3>
      <article className="lg:p-24 flex flex-col gap-5 m-5">
        <h4 className="text-lg font-bold">Introducing Safety First Wales!</h4>
        <p className="text-justify">
          The Safety First Wales coalition has launched this month aiming to
          decriminalise sex work and ensure that sex workers’ safety, health,
          and well-being are prioritised in Wales.
        </p>
        <p className="text-justify">
          Our briefing paper documents the experiences of sex workers in our
          network and contains proposals for change, many of which could be
          immediately implemented by the Senedd.
        </p>
        <p className="text-justify">
          Please support us by signing and sharing our petition that demands:
        </p>
        <ol className="list-decimal px-4 text-justify ">
          <li>
            The decriminalisation of sex work to improve sex workers’ health,
            safety and welfare.
          </li>
          <li>
            The provision of financial support for sex workers wishing to exit
            sex work.
          </li>
        </ol>
        <p className="text-justify">
          Please check back for more news and updates soon.
        </p>
      </article>
    </section>
  );
}
