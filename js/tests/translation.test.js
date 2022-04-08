import index from "../modules/morseIndex.js";
import engTrans from "../modules/engTrans";
import morseTrans from "../modules/morseTrans";

describe("Testing English to Morse translation", () => {
    it("Should return correct translation", () => {
        expect(engTrans("test", index)).toBe("- . ... -");
        expect(engTrans("Rémi + 1", index)).toBe(
            ".-. ..-.. -- .. / .-.-. / .----",
        );
    });

    it("Should return No valid inputs detected when given invalid inputs", () => {
        expect(engTrans("", index)).toBe("No valid input detected");
        expect(engTrans(1, index)).toBe("No valid input detected");
    });

    it("Should return # on invalid chars", () => {
        expect(engTrans("<", index)).toBe("#");
        expect(engTrans("Test<", index)).toBe("- . ... - #");
    });
});

describe("Testing Morse to English translation", () => {
    it("Should return correct translation", () => {
        expect(morseTrans("- . ... -", index)).toBe("test");
        expect(morseTrans(".-. ..-.. -- .. / .-.-. / .----", index)).toBe(
            "rémi + 1",
        );
    });

    it("Should return No valid inputs detected when given invalid inputs", () => {
        expect(morseTrans("", index)).toBe("No valid input detected");
        expect(morseTrans(1, index)).toBe("No valid input detected");
    });

    it("Should return # on invalid chars", () => {
        expect(morseTrans("abc", index)).toBe("#");
        expect(morseTrans("- . ... -a", index)).toBe("tes#");
    });
});
