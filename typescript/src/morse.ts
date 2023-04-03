type MorseAlphabet = {[chart: string]: string} 
const morseAlphabet: MorseAlphabet = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
  };

type MorseTransmitter = {
  transmitMessage: (mensaje: string) => void;
};
  
const MorseTransmitter = (
  morseAlphabet: MorseAlphabet,
  timeoutFn: (puntos: number) => Promise<void>,
  writerFn: (state: "ON" | "OFF") => void,
  finalCallbackFn?: () => void
): MorseTransmitter => {
  const transmitSymbol = async (symbol: string) => {
    symbol.split('').forEach(async (s) => {
      const state = s === "." ? "ON" : "OFF";
      writerFn(state);
      await timeoutFn(1);
    });
  };

  const transmitWord = async (word: string) => {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLocaleLowerCase();
      const symbol = morseAlphabet[letter];
      if (!symbol) {
        throw new Error(`The character "${letter}" is not defined in Morse alphabet`);
      }
      await transmitSymbol(symbol);
      await timeoutFn(2);
    }
  };

  const transmitMessage = async (mensaje: string) => {
    const words = mensaje.split(" ");
    for (let i = 0; i < words.length; i++) {
      await transmitWord(words[i]);
      if (i < words.length - 1) {
        await timeoutFn(4);
      }
    }
    if (finalCallbackFn) {
      finalCallbackFn();
    }
  };

  return {
    transmitMessage,
  };
};


const timeoutFn = async (puntos: number) => {
  await new Promise((resolve) => setTimeout(resolve, puntos * 500));
};

const writerFn = (state: "ON" | "OFF") => {
  console.log(state);
};

const finalCallbackFn = () => {
  console.log("Message fully transmitted");
};

const tm = MorseTransmitter(morseAlphabet, timeoutFn, writerFn, finalCallbackFn);

tm.transmitMessage("HOLA ANYI");