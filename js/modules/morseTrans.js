export default function morseTrans(morseTxt, dict) {
    if (typeof morseTxt === "string" && morseTxt !== "") {
        return morseTxt
            .split(" ")
            .map((char) => {
                const found = Object.entries(dict).find(
                    (key) => key[1] === char,
                );
                if (found === undefined) {
                    return "#";
                }
                return found[0];
            })
            .join("");
    } else {
        return "No valid input detected";
    }
}
