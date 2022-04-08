import index from "./modules/morseIndex.js";
import engTrans from "./modules/engTrans.js";
import morseTrans from "./modules/morseTrans.js";

const engText = document.querySelector("#engText");
const morseText = document.querySelector("#morseText");
const transBtn = document.querySelector("#transBtn");
let active = "";
engText.value = "";
morseText.value = "";

//select the most recently edited textarea
engText.addEventListener("input", () => (active = "eng"));
morseText.addEventListener("input", () => (active = "morse"));

transBtn.addEventListener("click", () => {
    if (active === "eng") {
        morseText.value = engTrans(engText.value, index);
    } else if (active === "morse") {
        engText.value = morseTrans(morseText.value, index);
    }
});
