import { isCharsEqual, isConsonant } from "../helper";

export default (text: string): string => {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const currChar = text[i]
    const prevChar = text[i - 1];
    const nextChar = text[i + 1];

    if (currChar === "Ч") {
      result += "Č";
      continue;
    }
    if (currChar === "ч") {
      result += "č";
      continue;
    }
    if (currChar === "В") {
      result += "V";
      continue;
    }
    if (currChar === "в") {
      result += "v";
      continue;
    }
    if (currChar === "Ш") {
      result += "Š";
      continue;
    }
    if (currChar === "ш") {
      result += "š";
      continue;
    }
    if (currChar === "Щ") {
      result += "Šč";
      continue;
    }
    if (currChar === "щ") {
      result += "šč";
      continue;
    }
    if (currChar === "Ж") {
      result += "Ž";
      continue;
    }
    if (currChar === "ж") {
      result += "ž";
      continue;
    }
    if (currChar === "А") {
      result += "A";
      continue;
    }
    if (currChar === "а") {
      result += "a";
      continue;
    }
    if (currChar === "Б") {
      result += "B";
      continue;
    }
    if (currChar === "б") {
      result += "b";
      continue;
    }
    if (currChar === "Ц") {
      result += "C";
      continue;
    }
    if (currChar === "ц") {
      result += "c";
      continue;
    }
    if (currChar === "Х") {
      result += "Ch";
      continue;
    }
    if (currChar === "х") {
      result += "ch";
      continue;
    }
    if (currChar === "Д") {
      result += "D";
      continue;
    }
    if (currChar === "д") {
      result += "d";
      continue;
    }
    if (prevChar && isConsonant(prevChar) && currChar === "Є") {
      result += "Ě";
      continue;
    }
    if (currChar === "Є") {
      result += "Je";
      continue;
    }
    if (prevChar && isConsonant(prevChar) && currChar === "є") {
      result += "ě";
      continue;
    }
    if (currChar === "є") {
      result += "je";
      continue;
    }
    if (currChar === "Е") {
      result += "E";
      continue;
    }
    if (currChar === "е") {
      result += "e";
      continue;
    }
    if (currChar === "Ї") {
      result += "Ji";
      continue;
    }
    if (currChar === "ї") {
      result += "ji";
      continue;
    }
    if (currChar === "Ф") {
      result += "F";
      continue;
    }
    if (currChar === "ф") {
      result += "f";
      continue;
    }
    if (currChar === "Ґ") {
      result += "G";
      continue;
    }
    if (currChar === "ґ") {
      result += "g";
      continue;
    }
    if (currChar === "Г") {
      result += "H";
      continue;
    }
    if (currChar === "г") {
      result += "h";
      continue;
    }
    if (currChar === "І") {
      result += "I";
      continue;
    }
    if (nextChar && currChar === "і" && isCharsEqual(nextChar, "й")) {
      result += "í";
      continue;
    }
    if (currChar === "і") {
      result += "i";
      continue;
    }
    if (currChar === "Й") {
      result += "J";
      continue;
    }
    if (
      prevChar &&
      currChar === "й" &&
      (isCharsEqual(prevChar, "и") || isCharsEqual(prevChar, "і"))
    ) {
      continue;
    }
    if (currChar === "й") {
      result += "j";
      continue;
    }
    if (currChar === "К") {
      result += "K";
      continue;
    }
    if (currChar === "к") {
      result += "k";
      continue;
    }
    if (currChar === "Л") {
      result += "L";
      continue;
    }
    if (currChar === "л") {
      result += "l";
      continue;
    }
    if (currChar === "М") {
      result += "M";
      continue;
    }
    if (currChar === "м") {
      result += "m";
      continue;
    }
    if (currChar === "Н") {
      result += "N";
      continue;
    }
    if (currChar === "н") {
      result += "n";
      continue;
    }
    if (currChar === "О") {
      result += "O";
      continue;
    }
    if (currChar === "о") {
      result += "o";
      continue;
    }
    if (currChar === "П") {
      result += "P";
      continue;
    }
    if (currChar === "п") {
      result += "p";
      continue;
    }
    if (currChar === "Р") {
      result += "R";
      continue;
    }
    if (currChar === "р") {
      result += "r";
      continue;
    }
    if (currChar === "С") {
      result += "S";
      continue;
    }
    if (currChar === "с") {
      result += "s";
      continue;
    }
    if (currChar === "Т") {
      result += "T";
      continue;
    }
    if (currChar === "т") {
      result += "t";
      continue;
    }
    if (currChar === "У") {
      result += "U";
      continue;
    }
    if (currChar === "у") {
      result += "u";
      continue;
    }
    if (currChar === "И") {
      result += "Y";
      continue;
    }
    if (nextChar && currChar === "и" && isCharsEqual(nextChar, "й")) {
      result += "ý";
      continue;
    }
    if (currChar === "и") {
      result += "y";
      continue;
    }
    if (currChar === "З") {
      result += "Z";
      continue;
    }
    if (currChar === "з") {
      result += "z";
      continue;
    }
    if (currChar === "Ю") {
      result += "Ju";
      continue;
    }
    if (prevChar && currChar === "ю" && isConsonant(prevChar)) {
      result += "ǔ";
      continue;
    }
    if (currChar === "ю") {
      result += "ju";
      continue;
    }
    if (currChar === "Я") {
      result += "Ja";
      continue;
    }
    if (prevChar && currChar === "я" && isConsonant(prevChar)) {
      result += "ǎ";
      continue;
    }
    if (currChar === "я") {
      result += "ja";
      continue;
    }
    if (currChar === "ь") {
      result += "'";
      continue;
    }
    if (currChar === "’" || currChar === "'") {
      result += "";
      continue;
    }

    result += currChar;
  }

  return result;
};
