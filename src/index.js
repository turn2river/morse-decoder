const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};

function decode(expr) {
  let binArray = [],
    decodeArray = [],
    result = [];

  for (let i = 0; i < expr.length; i += 10) {
    binArray.push(expr.slice(i, i + 10));
  }

  binArray.map((element) => {
    decodeArray.push(element.replace(/00/gi, "").replace(/10/gi, ".").replace(/11/gi, "-"));
  });

  decodeArray.forEach((element) => {
    result.push(MORSE_TABLE[element]);
  });
  return result.join("");
}

module.exports = {
  decode,
};
