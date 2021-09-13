export const isCharsEqual = (nextChar, char) => {
  if (!nextChar || typeof nextChar != 'string') return null;
 return char.toLowerCase() == nextChar.toLowerCase();
}

export const isConsonant = char => (
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
    isCharsEqual(char, "щ")
  );