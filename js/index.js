const index = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
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
    " ": "/",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    '"': ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    "¿": "..-.-",
    "¡": "--...-",
};

const engText = document.querySelector("#engText");
const morseText = document.querySelector("#morseText");
const transBtn = document.querySelector("#transBtn");
let active = "";

/* const reversedIndex = Object.entries(index).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {}); */

engText.addEventListener("input", () => (active = "eng"));
morseText.addEventListener("input", () => (active = "morse"));

transBtn.addEventListener("click", () => translation());

function translation() {
    if (active === "eng" && engText.value !== "") {
        morseText.value = engText.value
            .toLowerCase()
            .split("")
            .map((char) => {
                return Object.entries(index).find((key) => key[0] === char)[1];
            })
            .join(" ");
        return;
    } else if (active === "morse" && morseText.value !== "") {
        engText.value = morseText.value
            .split(" ")
            .map((char) => {
                return Object.entries(index).find((key) => key[1] === char)[0];
            })
            .join("");
    } else {
        console.log("No inputs detected");
    }
}
