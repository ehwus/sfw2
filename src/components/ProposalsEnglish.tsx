import { Link } from "react-router-dom";

export function ProposalsEnglish() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-64 h-11 mx-auto mt-5 lg:m-10">
        PROPOSALS FOR CHANGE
      </h3>
      <article className="lg:p-24 flex flex-col gap-5 m-5">
        <h4 className="text-lg font-extrabold">
          SAFETY FIRST WALES PROPOSALS FOR CHANGE
        </h4>
        <ul className="list-disc">
          <li>
            <b>
              Support demands nationally for the decriminalisation of sex work.
            </b>{" "}
            Evidence from New Zealand where decriminalisation was introduced in
            2003 shows: no rise in prostitution; women more able to report
            violence without fear of arrest; attacks cleared up more quickly;
            sex workers more able to leave prostitution as convictions are
            cleared from their records; drug users treated as patients not
            criminals.
          </li>
          <li>
            <b>Oppose the criminalisation of sex workers’ clients</b> (so called
            ‘Nordic model’) as this undermines sex workers’ safety.
          </li>
          <li>
            <b>Implement an amnesty from arrest</b> to protect sex workers who
            report witnessing or experiencing violence. A sex worker-led
            campaign won such an amnesty in California. In cities across the US
            (Baltimore, Los Angeles, Manhattan, Philadelphia, San Francisco)
            District Attorneys are refusing to prosecute sex workers in
            recognition of the harm caused by criminalisation.
          </li>
          <li>
            <b>Amend National Police Chiefs’ Council guidelines</b> to specify
            that arrests and raids should only occur where police can show
            reasonable grounds to suspect that sex workers are being subject to
            force and coercion. This would help ensure that sex workers aren’t
            criminalised “simply for being sex workers” or engaging in practices
            that increase their own safety.
          </li>
          <li>
            <b>
              Implement a 'firewall' to separate police investigations into
              violence and labour inspections from Immigration Enforcement
            </b>
            , to ensure migrant sex workers can report violence regardless of
            their immigration status.
          </li>
          <li>
            <b>
              Instruct the police, prosecuting authorities and courts to
              prioritise safety
            </b>{" "}
            by vigorously investigating and prosecuting rape, coercion, stalking
            and other violence.
          </li>
          <li>
            <b>Oppose clauses in the Online Safety Bill</b> which put a
            responsibility onto tech companies to censor sex workers’ adverts as
            any crackdown on online advertising has been shown to increase the
            risks for sex workers and make it harder for people to work
            independently.
          </li>
          <li>
            <b>
              Target resources at sex workers to enable them to leave
              prostitution if they choose.
            </b>{" "}
            Specifically, priority for social housing, debt relief, health
            services, improved domestic violence services and instructing
            benefit decision makers to not impose sanctions.
          </li>
          <li>
            <b>Extend the provision of a “care income” to mothers</b> - similar
            to the payments of £1600 a month given to young people leaving care
            - in recognition of the fact that most sex workers are working to
            support families. Hawaii passed a law in January to pay a basic
            income of $2000 a month to sex workers aiming to exit prostitution.
          </li>
          <li>
            <b>
              Take action to stop sex working mothers losing custody of their
              children
            </b>{" "}
            - no child should be is taken from their mother/primary carer
            because the family is poor, homeless or unable to afford food,
            clothing or childcare.
          </li>
          <li>
            <b>Scrap the No Recourse to Public Funds (NRPF) condition</b> which
            disproportionately affects women and leaves them destitute and at
            risk of exploitation and violence.
          </li>
        </ul>
        <p>
          As an immediate first step, the 2016 parliamentary Home Affairs
          Committee recommendation could be implemented to decriminalise sex
          workers on the street and working together in premises and expunge
          criminal records.
        </p>
        <Link
          to="/briefing"
          className="border-2 border-black mx-auto py-4 px-8 rounded-full hover:opacity-75"
        >
          See full briefing here
        </Link>
      </article>
    </section>
  );
}
