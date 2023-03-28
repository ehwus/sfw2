export function About() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-32 h-11 mx-auto mt-5 lg:m-10">
        ABOUT US
      </h3>
      <aside className="lg:p-24 flex flex-col gap-8 m-5">
        <p className="text-justify">
          Safety First Wales is a coalition of sex workers, health
          professionals, church representatives, anti-racist, anti-poverty,
          anti-violence, migrant and trans rights campaigners -- formed to
          decriminalise sex work in Wales and prioritise sex workers’ safety,
          health, and well-being.
        </p>
        <p className="text-justify">
          Members of our network have direct experience of the harm caused by
          criminalisation, poverty and discrimination. By documenting and
          disseminating these experiences, we aim to transform law and policy so
          that prostitution reduction strategies don’t focus on policing and law
          enforcement but on the provision of benefits, housing and other
          resources for women to empower them to leave and refuse prostitution.
          We want to ensure that it is no longer possible for sex workers&apos;
          voices to be ignored and overlooked in Wales.
        </p>
      </aside>
    </section>
  );
}
