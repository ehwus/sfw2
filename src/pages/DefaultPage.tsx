import { DefaultHeroEnglish } from "../components/DefaultHeroEnglish";
import { RedQuoteEnglish } from "../components/RedQuoteEnglish";
import { useBilingualism } from "../hooks/useBilingalism";
import { DefaultHeroWelsh } from "../components/DefaultHeroWelsh";
import { RedQuoteWelsh } from "../components/RedQuoteWelsh";

export function DefaultPage() {
  const { language } = useBilingualism();

  return (
    <>
      {language == "English" ? <DefaultHeroEnglish /> : <DefaultHeroWelsh />}
      {language == "English" ? <RedQuoteEnglish /> : <RedQuoteWelsh />}
    </>
  );
}
