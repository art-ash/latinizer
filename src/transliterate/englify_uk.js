import { isConsonant } from "../helper";

export default text => {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "Ч") {
      result += "Ch";
      continue;
    }
    if (text[i] === "ч") {
      result += "ch";
      continue;
    }
    if (text[i] === "В") {
      result += "V";
      continue;
    }
    if (text[i] === "в") {
      result += "v";
      continue;
    }
    if (text[i] === "Ш") {
      result += "Sh";
      continue;
    }
    if (text[i] === "ш") {
      result += "sh";
      continue;
    }
    if (text[i] === "Щ") {
      result += "Shch";
      continue;
    }
    if (text[i] === "щ") {
      result += "shch";
      continue;
    }
    if (text[i] === "Ж") {
      result += "Zh";
      continue;
    }
    if (text[i] === "ж") {
      result += "zh";
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
      result += "Ts";
      continue;
    }
    if (text[i] === "ц") {
      result += "ts";
      continue;
    }
    if (text[i] === "Х") {
      result += "Kh";
      continue;
    }
    if (text[i] === "х") {
      result += "kh";
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
      result += "Ye";
      continue;
    }
    if (text[i] === "є" && isConsonant(text[i - 1])) {
      result += "ie";
      continue;
    }
    if (text[i] === "є") {
      result += "ye";
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
      result += "Yi";
      continue;
    }
    if (text[i] === "ї") {
      result += "yi";
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
      result += "Y";
      continue;
    }
    if (text[i] === "й") {
      result += "y";
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
      result += "Yu";
      continue;
    }
    if (text[i] === "ю" && isConsonant(text[i - 1])) {
        result += "iu";
        continue;
    }
    if (text[i] === "ю") {
      result += "yu";
      continue;
    }
    if (text[i] === "Я") {
      result += "Ya";
      continue;
    }
    if (text[i] === "я" && isConsonant(text[i - 1])) {
        result += "ia";
        continue;
    }
    if (text[i] === "я") {
      result += "ya";
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
