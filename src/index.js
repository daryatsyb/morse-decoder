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
  const substrings = expr.match(/.{10}/g);
  const morseChars = substrings.map(substring => {
    const morseChar = substring
      .replace(/10/g, '.')
      .replace(/11/g, '-')
      .replace(/^0+/, '');
    return morseChar;
  });
  
  const chars = morseChars.map(morseChar => {
    if (morseChar === '**********') {
      return ' ';
    }
    const char = MORSE_TABLE[morseChar];
    return char;
  });
  return chars.join('');
}

module.exports = {
    decode
}
