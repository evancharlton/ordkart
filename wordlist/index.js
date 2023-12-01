const lang = process.argv[2];

if (!lang) {
  console.error(`Usage: node wordlist [nb|nn]`);
  process.exit(1);
}

const { writeFileSync } = require("fs");
const { join } = require("path");
const { extract } = require(join(__dirname, lang, "index"));

extract()
  .then((words) => {
    const trie = {};
    for (const entry of words) {
      const { word, ...info } = entry;
      let node = trie;
      for (const letter of word) {
        if (!node[letter]) {
          node[letter] = {};
        }
        node = node[letter];
      }
      node.info = node.info || [];
      node.info.push(info);
    }

    writeFileSync(
      join(__dirname, "..", "app", "public", "nb.json"),
      JSON.stringify(trie)
    );
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
