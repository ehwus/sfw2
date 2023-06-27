import { ProposalsEnglish } from "../components/ProposalsEnglish";
import { ProposalsWelsh } from "../components/ProposalsWelsh";
import { useBilingualism } from "../hooks/useBilingalism";

export function Proposals() {
  const { language } = useBilingualism();
  return language === "English" ? <ProposalsEnglish /> : <ProposalsWelsh />;
}
