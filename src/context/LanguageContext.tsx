import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Language =
  | "es"
  | "en";

interface ContextType {
  language: Language;

  setLanguage: (
    language: Language
  ) => void;
}

const LanguageContext =
  createContext<ContextType>(
    {} as ContextType
  );

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] =
    useState<Language>("es");

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "rinova-language"
      );

    if (
      saved === "es" ||
      saved === "en"
    ) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (
    lang: Language
  ) => {
    setLanguage(lang);

    localStorage.setItem(
      "rinova-language",
      lang
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage:
          changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage =
  () =>
    useContext(
      LanguageContext
    );