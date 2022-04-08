export default function engTrans(engTxt, dict) {
    if (typeof engTxt === "string" && engTxt !== "") {
        return engTxt
            .toLowerCase()
            .split("")
            .map((char) => {
                const found = Object.entries(dict).find(
                    (key) => key[0] === char,
                );
                //if the value isn't found then return an error character
                if (found === undefined) {
                    return "#";
                }
                return found[1];
            })
            .join(" ");
    } else {
        return "No valid input detected";
    }
}
