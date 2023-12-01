import { h, Component } from "preact";

export class Card extends Component {
  render = ({ fraDato, tilDato, oppslag }) => {
    return (
      <div class="card">
        <span>
          {fraDato}&ndash;{tilDato}
        </span>
        <p>{oppslag}</p>
      </div>
    );
  };
}

export const getKey = ({ fraDato, tilDato, oppslag }) =>
  [fraDato, tilDato, oppslag].join("/");
