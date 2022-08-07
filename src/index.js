const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
const arrExpr = [];
for (let i = 0; i < expr.length; i += 10) {
  arrExpr.push(expr.slice(i, i + 10));
}
const arrFinish = [];
const end = [];

arrExpr.forEach(element => {
  let result = "";
  for (let i = 0; i < element.length; i += 2) {
    if (element.slice(i, i + 2) === "10") {
      result = result + ".";
    } else if (element.slice(i, i + 2) === "11") {
      result = result + "-";
    }
  }
  end.push(result)
});

  end.map(el => {
  if (el === "") {
    arrFinish.push(" ")
  } else if (el !== " ") {
    arrFinish.push(MORSE_TABLE[el])
  }
})

  return arrFinish.join("");
}

module.exports = {
    decode
}