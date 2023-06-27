import React, { useContext, useState } from "react";

const LANGUAGE_STORAGE_KEY = "language";
type Language = "English" | "Cymraeg";

const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "";

const initialLanguage =
  savedLanguage === "English" || savedLanguage === "Cymraeg"
    ? savedLanguage
    : "English";

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
  const [language, setLanguage] = useState<Language>(initialLanguage);

  return (
    <BilingualismContext.Provider value={{ language, update: setLanguage }}>
      {children}
    </BilingualismContext.Provider>
  );
}

export function useBilingualism() {
  const { language, update } = useContext(BilingualismContext);
  function switchLanguage() {
    const newLanguage = language === "English" ? "Cymraeg" : "English";
    update(newLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
  }

  return { language, switchLanguage };
}
