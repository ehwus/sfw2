import { useBilingualism } from "../hooks/useBilingalism";
import { NavLink } from "react-router-dom";

export function GetInvolved() {
  const { language } = useBilingualism();

  return (
    <section className="w-full flex flex-col lg:flex-row">
      <h3 className="bg-black py-2.5 whitespace-nowrap px-6 text-center text-white w-44 h-11 mx-auto mt-5 lg:m-10">
        {language === "English" ? "GET INVOLVED" : "CYMERWCH RAN"}
      </h3>
      <aside className="lg:p-24 flex flex-col gap-5 m-5">
        <h4 className="text-lg font-bold">
          {language === "English"
            ? "Join the coalition"
            : "Ymunwch â’r glymblaid"}
        </h4>
        <p className="text-justify">
          {language === "English"
            ? "If you’re a sex worker in Wales, an organisation or supporter and want to get involved in the campaign, please get in touch with us."
            : "Os ydych yn weithiwr rhyw yng Nghymru, yn sefydliad neu’n gefnogwr ac eisiau cymryd rhan yn yr ymgyrch, cysylltwch â ni."}
        </p>
        <hr className="bg-black h-1 w-56 mx-auto lg:mx-0" />
        <h4 className="text-lg font-bold">
          {language === "English"
            ? "Circulate the petition"
            : "Lledaenu’r ddeiseb"}
        </h4>
        <NavLink
          className="text-justify hover:text-red-500 underline"
          to="/petition"
        >
          {language === "English"
            ? "Click here to sign and share."
            : "Cliciwch yma i lofnodi ac i rannu."}
        </NavLink>
      </aside>
    </section>
  );
}
