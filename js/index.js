import index from "./modules/morseIndex.mjs";

const engText = document.querySelector("#engText");
const morseText = document.querySelector("#morseText");
const transBtn = document.querySelector("#transBtn");
let active = "";
engText.value = "";
morseText.value = "";

//select the most recently edited textarea
engText.addEventListener("input", () => (active = "eng"));
morseText.addEventListener("input", () => (active = "morse"));

transBtn.addEventListener("click", () => translation());

function translation() {
    //if the most recent text was in the english box and it isn't empty
    if (active === "eng" && engText.value !== "") {
        morseText.value = engText.value
            .toLowerCase()
            .split("")
            .map((char) => {
                const found = Object.entries(index).find(
                    (key) => key[0] === char,
                );
                //if the value isn't found then return an error character
                if (found === undefined) {
                    return "#";
                }
                return found[1];
            })
            .join(" ");
        return;
    } else if (active === "morse" && morseText.value !== "") {
        engText.value = morseText.value
            .split(" ")
            .map((char) => {
                const found = Object.entries(index).find(
                    (key) => key[1] === char,
                );
                if (found === undefined) {
                    return "#";
                }
                return found[0];
            })
            .join("");
    } else {
        console.log("No inputs detected");
    }
}
