export const isCharsEqual = (nextChar: string, char: string): boolean =>
  char.toLowerCase() === nextChar.toLowerCase();

export const isConsonant = (char: string): boolean =>
  isCharsEqual(char, "б") ||
  isCharsEqual(char, "в") ||
  isCharsEqual(char, "г") ||
  isCharsEqual(char, "д") ||
  isCharsEqual(char, "ж") ||
  isCharsEqual(char, "з") ||
  isCharsEqual(char, "к") ||
  isCharsEqual(char, "л") ||
  isCharsEqual(char, "м") ||
  isCharsEqual(char, "н") ||
  isCharsEqual(char, "п") ||
  isCharsEqual(char, "р") ||
  isCharsEqual(char, "с") ||
  isCharsEqual(char, "т") ||
  isCharsEqual(char, "ф") ||
  isCharsEqual(char, "х") ||
  isCharsEqual(char, "ц") ||
  isCharsEqual(char, "ч") ||
  isCharsEqual(char, "ш") ||
  isCharsEqual(char, "щ");

export const isUkInput = (text: string) => {
  const textInLowercase = text.toLowerCase();

  return (
    textInLowercase.includes("ї") ||
    textInLowercase.includes("ґ") ||
    textInLowercase.includes("є") ||
    textInLowercase.includes("і")
  );
};

export const isRuInput = (text: string): boolean => {
  const textInLowercase = text.toLowerCase();

  return (
    textInLowercase.includes("ё") ||
    textInLowercase.includes("ы") ||
    textInLowercase.includes("ъ") ||
    textInLowercase.includes("э")
  );
};
