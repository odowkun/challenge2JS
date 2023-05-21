// include pakage prompt-sync for running in node
const prompt = require("prompt-sync")();
let text;
text = prompt("Tuliskan kata = ");

// format judul
const split = text.split(" ");
for (let i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].slice(1).toLowerCase();

}
const fJudul = split.join(" ");
// format biasa
let fBiasa = text[0].toUpperCase() + text.slice(1).toLowerCase();

console.log("Format Judul: " + fJudul);
console.log("Format Biasa: " + fBiasa);

// run in terminal keyword node challenge2