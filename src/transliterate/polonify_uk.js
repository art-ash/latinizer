import { isConsonant } from "../helper";

export default text => {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "Ч") {
      result += "Cz";
      continue;
    }
    if (text[i] === "ч") {
      result += "cz";
      continue;
    }
    if (text[i] === "В") {
      result += "W";
      continue;
    }
    if (text[i] === "в") {
      result += "w";
      continue;
    }
    if (text[i] === "Ш") {
      result += "Sz";
      continue;
    }
    if (text[i] === "ш") {
      result += "sz";
      continue;
    }
    if (text[i] === "Щ") {
      result += "Szcz";
      continue;
    }
    if (text[i] === "щ") {
      result += "szcz";
      continue;
    }
    if (text[i] === "Ж") {
      result += "Ż";
      continue;
    }
    if (text[i] === "ж") {
      result += "ż";
      continue;
    }
    if (text[i] === "А") {
      result += "A";
      continue;
    }
    if (text[i] === "а") {
      result += "a";
      continue;
    }
    if (text[i] === "Б") {
      result += "B";
      continue;
    }
    if (text[i] === "б") {
      result += "b";
      continue;
    }
    if (text[i] === "Ц") {
      result += "C";
      continue;
    }
    if (text[i] === "ц") {
      result += "c";
      continue;
    }
    if (text[i] === "Х") {
      result += "Ch";
      continue;
    }
    if (text[i] === "х") {
      result += "ch";
      continue;
    }
    if (text[i] === "Д") {
      result += "D";
      continue;
    }
    if (text[i] === "д") {
      result += "d";
      continue;
    }
    if (text[i] === "Є") {
      result += "Je";
      continue;
    }
    if (text[i] === "є" && isConsonant(text[i - 1])) {
      result += "ie";
      continue;
    }
    if (text[i] === "є") {
      result += "je";
      continue;
    }
    if (text[i] === "Е") {
      result += "E";
      continue;
    }
    if (text[i] === "е") {
      result += "e";
      continue;
    }
    if (text[i] === "Ї") {
      result += "Ji";
      continue;
    }
    if (text[i] === "ї") {
      result += "ji";
      continue;
    }
    if (text[i] === "Ф") {
      result += "F";
      continue;
    }
    if (text[i] === "ф") {
      result += "f";
      continue;
    }
    if (text[i] === "Ґ") {
      result += "G";
      continue;
    }
    if (text[i] === "ґ") {
      result += "g";
      continue;
    }
    if (text[i] === "Г") {
      result += "H";
      continue;
    }
    if (text[i] === "г") {
      result += "h";
      continue;
    }
    if (text[i] === "І") {
      result += "I";
      continue;
    }
    if (text[i] === "і") {
      result += "i";
      continue;
    }
    if (text[i] === "Й") {
      result += "J";
      continue;
    }
    if (text[i] === "й") {
      result += "j";
      continue;
    }
    if (text[i] === "К") {
      result += "K";
      continue;
    }
    if (text[i] === "к") {
      result += "k";
      continue;
    }
    if (text[i] === "Л") {
      result += "L";
      continue;
    }
    if (text[i] === "л") {
      result += "l";
      continue;
    }
    if (text[i] === "М") {
      result += "M";
      continue;
    }
    if (text[i] === "м") {
      result += "m";
      continue;
    }
    if (text[i] === "Н") {
      result += "N";
      continue;
    }
    if (text[i] === "н") {
      result += "n";
      continue;
    }
    if (text[i] === "О") {
      result += "O";
      continue;
    }
    if (text[i] === "о") {
      result += "o";
      continue;
    }
    if (text[i] === "П") {
      result += "P";
      continue;
    }
    if (text[i] === "п") {
      result += "p";
      continue;
    }
    if (text[i] === "Р") {
      result += "R";
      continue;
    }
    if (text[i] === "р") {
      result += "r";
      continue;
    }
    if (text[i] === "С") {
      result += "S";
      continue;
    }
    if (text[i] === "с") {
      result += "s";
      continue;
    }
    if (text[i] === "Т") {
      result += "T";
      continue;
    }
    if (text[i] === "т") {
      result += "t";
      continue;
    }
    if (text[i] === "У") {
      result += "U";
      continue;
    }
    if (text[i] === "у") {
      result += "u";
      continue;
    }
    if (text[i] === "И") {
      result += "Y";
      continue;
    }
    if (text[i] === "и") {
      result += "y";
      continue;
    }
    if (text[i] === "З") {
      result += "Z";
      continue;
    }
    if (text[i] === "з") {
      result += "z";
      continue;
    }
    if (text[i] === "Ю") {
      result += "Ju";
      continue;
    }
    if (text[i] === "ю" && isConsonant(text[i - 1])) {
      result += "iu";
      continue;
    }
    if (text[i] === "ю") {
      result += "ju";
      continue;
    }
    if (text[i] === "Я") {
      result += "Ja";
      continue;
    }
    if (text[i] === "я" && isConsonant(text[i - 1])) {
      result += "ia";
      continue;
    }
    if (text[i] === "я") {
      result += "ja";
      continue;
    }
    if (text[i] === "ь") {
      result += "'";
      continue;
    }
    if (text[i] === "’" || text[i] === "'") {
      result += "";
      continue;
    }

    result += text[i];
  }

  return result;
};
