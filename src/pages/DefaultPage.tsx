import { DefaultHeroEnglish } from "../components/DefaultHeroEnglish";
import { RedQuote } from "../components/RedQuote";
import { useBilingualism } from "../hooks/useBilingalism";
import { DefaultHeroWelsh } from "../components/DefaultHeroWelsh";

export function DefaultPage() {
  const { language } = useBilingualism();

  return (
    <>
      {language == "English" ? <DefaultHeroEnglish /> : <DefaultHeroWelsh />}
      <RedQuote />
    </>
  );
}
