import { Component } from "react";
import './card.styles.css';

class Card extends Component {
  render() {
    const { id, email, name } = this.props;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set3`}
        />
        <h1> {name}</h1>
        <p> {email}</p>
      </div>
    );
  }
}

export default Card;
