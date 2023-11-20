import jsdom from "jsdom";
import fs from "fs";
const TABLE: [number, string][] = [
    //  66666
    // 7    15
    // 7   1 5
    //  00000
    // 8 2 9 4
    // 82   94
    //  33333
    
    //s1234567890
    [0b1101001001, "p"],
    [0b1011000101, "b"],
    [0b1011010101, "m"],

    //s1234567890
    [0b1111110000, "c"],
    [0b0011111000, "x"],
    [0b1111101100, "z"],

    //s1234567890
    [0b1101101100, "t"],
    [0b0111101100, "d"],
    [0b1101101110, "n"],
    [0b0011110001, "l"],

    //s1234567890
    [0b1110011100, "k"],
    [0b0010011100, "h"],

    //s1234567890
    [0b0010011110, "a"],
    [0b0011101100, "e"],
    [0b0001111100, "i"],
    [0b0011110000, "u"],
    [0b0011110010, "o"],

    //s1234567890
    [0b0000000010, "0"],
    [0b0001100000, "1"],
    [0b0001101000, "2"],
    [0b1001101000, "3"],
    [0b1100000001, "4"],

    //s1234567890
    [0b0000000001, "5"],
    [0b1000000011, "6"],
    [0b1000001111, "7"],
    [0b1101101101, "8"],
    [0b1100010001, "9"],

    //s1234567890
    [0b0001101001, "j"],
    [0b0011111100, "w"],

    //s1234567890
    [0b0001101010, "!"],
    [0b0100000000, ","],
    [0b0000000001, "U+002D"], // hyphen
    [0b0110000010, "U+002E"], // period
    [0b1111010000, "U+003F"], // ?
    [0b0000000000, "U+0020"], // space
    [0b1000001000, "U+0022"], // double quote
]

for (const [bitstring, filepath] of TABLE) {
    const doc = new jsdom.JSDOM(fs.readFileSync("template.svg")).window.document;
    for (let i = 1; i <= 10; i++) {
        // 1-index で上から i 番目の bit が立っていなかったら seg${i} を破壊
        if ((bitstring & (1 << (10 - i))) === 0) {
            doc.getElementById(`seg${i}`)!.remove();
        }
    }
    const resulting_svg = doc.getElementsByTagName("body")[0].innerHTML;
    fs.writeFileSync(`glyphs/${filepath}.svg`, `<?xml version="1.0" encoding="UTF-8" standalone="no"?>${resulting_svg}`);
}
