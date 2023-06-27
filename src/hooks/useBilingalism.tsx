import React, { useContext, useState } from "react";

type Language = "English" | "Cymraeg";

const BilingualismContext = React.createContext<{
  language: Language;
  update: (language: Language) => void;
}>({
  language: "English",
  update: () =>
    console.error("BilingalismContext not correctly set up via provider."),
});

export function BilingualismProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("English");

  return (
    <BilingualismContext.Provider value={{ language, update: setLanguage }}>
      {children}
    </BilingualismContext.Provider>
  );
}

export function useBilingualism() {
  const { language, update } = useContext(BilingualismContext);
  const switchLanguage = () =>
    update(language === "English" ? "Cymraeg" : "English");

  return { language, switchLanguage };
}
