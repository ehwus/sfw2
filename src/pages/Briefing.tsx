import { useState } from "react";
import { BriefingEnglish } from "../components/BriefingEnglish";
import { BriefingWelsh } from "../components/BriefingWelsh";
import globe from "../assets/globe-solid.svg";

function useBilingualism() {
  const [language, setLanguage] = useState<"English" | "Cymraeg">("English");

  const switchLanguage = () =>
    setLanguage(language === "English" ? "Cymraeg" : "English");

  return { language, switchLanguage };
}

export function Briefing() {
  const { language, switchLanguage } = useBilingualism();

  return (
    <section className="w-full flex flex-col">
      <div>
        <button
          className="border border-black py-1 px-2.5 flex items-center justify-center gap-1 absolute right-0 m-2 lg:mr-20"
          onClick={() => switchLanguage()}
        >
          <>
            <img src={globe} className="h-5" />
            {language === "English" ? "Cymraeg" : "English"}
          </>
        </button>
      </div>
      <div className="mt-16 lg:mt-5">
        {language === "English" && <BriefingEnglish />}
        {language === "Cymraeg" && <BriefingWelsh />}
      </div>
    </section>
  );
}
