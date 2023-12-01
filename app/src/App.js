import { Component, h } from "preact";
import { Card, getKey } from "./Card";
import pako from "pako";
import "./App.css";

const ALPHABET = "abcdefghijklmnopqrstuvwxyzæøå".split("");

class App extends Component {
  constructor() {
    super();
    this.trie = {};
    this.state = {
      status: "loading",
      letters: [],
      path: [],
    };
  }

  componentDidMount = () => {
    fetch("/public/nb.json.gz")
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => pako.inflate(arrayBuffer, { to: "string" }))
      .then((str) => JSON.parse(str))
      .then((json) => {
        this.trie = json;
        this.setState({
          status: "loaded",
          letters: [],
          path: [],
        });
      });

    this.keypress = (e) => {
      const letter = e.key.toLowerCase();
      this.push(letter);
    };

    this.keydown = (e) => {
      if (e.key === "Backspace") {
        this.pop();
      }
    };

    window.addEventListener("keypress", this.keypress);
    window.addEventListener("keydown", this.keydown);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keypress", this.keypress);
  };

  push = (letter) => {
    const node = this.currentNode();
    const next = node[letter];

    if (!next) {
      return;
    }

    this.setState({
      letters: [...this.state.letters, letter],
      path: [...this.state.path, next],
    });
  };

  pop = () => {
    if (this.state.path.length === 0) {
      return;
    }

    this.setState({
      letters: this.state.letters.slice(0, -1),
      path: this.state.path.length > 0 ? this.state.path.slice(0, -1) : [],
    });
  };

  currentNode = () => {
    const { path } = this.state;
    return path.length > 0 ? path[path.length - 1] : this.trie;
  };

  render = (_, { status, path, letters }) => {
    const node = this.currentNode();
    switch (status) {
      case "loading": {
        return <div>loading</div>;
      }
      case "loaded": {
        const { info } = node;
        const buttons = ALPHABET.map((letter) => {
          return (
            <button
              disabled={!node[letter]}
              onClick={() => this.push(letter)}
              key={letter}
            >
              {letter}
            </button>
          );
        });
        return (
          <div class="container">
            <h1>{letters.join("") || String.fromCharCode(160)}</h1>
            <div class="info-container">
              {info && info.map((i) => <Card key={getKey(i)} {...i} />)}
            </div>
            <div class="buttons-container">
              {buttons}
              <button disabled={path.length === 0} onClick={() => this.pop()}>
                &lt;
              </button>
            </div>
          </div>
        );
      }
      case "error": {
        return <h1>Error</h1>;
      }
      default: {
        return <h1>{JSON.stringify(status)}</h1>;
      }
    }
  };
}

export default App;
