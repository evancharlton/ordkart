const { createReadStream } = require("fs");
const { join } = require("path");
const { createInterface } = require("readline");

const alphabet = new Set("abcdefghijklmnopqrstuvwxyzøæå");

const extract = () => {
  return new Promise((resolve) => {
    const words = [];

    const stream = createReadStream(join(__dirname, "fullformsliste.txt"), {
      encoding: "latin1",
    });
    const rl = createInterface({
      input: stream,
    });

    rl.on("line", (line) => {
      const [
        _loepenr,
        _lemmaId,
        word,
        oppslag,
        _paradigmeId,
        _boyNummer,
        fraDato,
        tilDato,
      ] = line.split("\t");

      if (word.length < 2) {
        return;
      }

      if (word.toLocaleLowerCase() !== word) {
        return;
      }

      for (const c of word) {
        if (!alphabet.has(c)) {
          return;
        }
      }

      words.push({ word, fraDato, tilDato, oppslag });
    });

    rl.on("close", () => {
      resolve([...words]);
    });
  });
};

module.exports = {
  extract,
};
