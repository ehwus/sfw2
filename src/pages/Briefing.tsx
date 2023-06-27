import { BriefingEnglish } from "../components/BriefingEnglish";
import { BriefingWelsh } from "../components/BriefingWelsh";
import { useBilingualism } from "../hooks/useBilingalism";

export function Briefing() {
  const { language } = useBilingualism();

  return (
    <section className="w-full flex flex-col">
      <div className="mt-16 lg:mt-5">
        {language === "English" && <BriefingEnglish />}
        {language === "Cymraeg" && <BriefingWelsh />}
      </div>
    </section>
  );
}
