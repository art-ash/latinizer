const en = {
  appLanguageLbl: "Language",
  appLanguageOptEn: "English",
  appLanguageOptUk: "Ukrainian",
  appLanguageOptRu: "Russian",
  appTitle: "Cyrillic to latin script converter",
  bgnPcgnHelpText: '"Englify" option will convert cyrillic text into',
  inputLanguageLbl: "Input Language",
  inputLanguageOptUk: "Ukrainian",
  inputLanguageOptRu: "Russian",
  outputLanguageLbl: "Output Language",
  outputLanguageOptEn: "Englify",
  outputLanguageOptCz: "Czechify",
  outputLanguageOptPl: "Polonify",
  inputLanguagePlaceholder: "Cyrillic text here...",
  new: "New",
};


export type Language = "en" | "uk" | "ru";

export type Messages = typeof en;

const uk: Messages = {
  appLanguageLbl: "Мова",
  appLanguageOptEn: "Англійська",
  appLanguageOptUk: "Українська",
  appLanguageOptRu: "Російська",
  appTitle: "Конвертор Кирилиці в Латинку",
  bgnPcgnHelpText: 'Опція "Англіфікувати" сконвертує кирилицю в стандарт',
  inputLanguageLbl: "Вхідна Мова",
  inputLanguageOptUk: "Українська",
  inputLanguageOptRu: "Російська",
  outputLanguageLbl: "Вихідна Мова",
  outputLanguageOptEn: "Англіфікувати",
  outputLanguageOptCz: "Чехіфікувати",
  outputLanguageOptPl: "Полонізувати",
  inputLanguagePlaceholder: "Текст кирилицею...",
  new: "Новий",
}

const messages: Record<Language, Messages> = {
  en,
  uk,
  ru: {
    appLanguageLbl: "Язык",
    appLanguageOptEn: "Английский",
    appLanguageOptUk: "Украинский",
    appLanguageOptRu: "Русский",
    appTitle: "Конвертор Кириллицы в Латиницу",
    bgnPcgnHelpText:
      'Опция "Англифицировать" сконвертирует кириллицу в стандарт',
    inputLanguageLbl: "Входящий Язык",
    inputLanguageOptUk: "Украинский",
    inputLanguageOptRu: "Русский",
    outputLanguageLbl: "Выходящий Язык",
    outputLanguageOptEn: "Англифицировать",
    outputLanguageOptCz: "Чехифицировать",
    outputLanguageOptPl: "Полонизировать",
    inputLanguagePlaceholder: "Текст кириллицей...",
    new: "Новый",
  },
};

export default messages;
