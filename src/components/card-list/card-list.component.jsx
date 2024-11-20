import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("render CardList", this.props.monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return <Card name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}

export default CardList;
