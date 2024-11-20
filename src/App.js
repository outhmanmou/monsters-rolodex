import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
      num: 1,
    };
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  onSearchEngine = (event) => {
    // console.log(event);
    this.setState(() => {
      return { searchValue: event.target.value };
    });
    console.log(this.state);
  };
  render() {
    // console.log("render");

    const { monsters, searchValue } = this.state;
    const { onSearchEngine } = this;

    const filtredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });

    return (
      <div className="App">
      <h1 className="app-title"> Monsters Rolodox </h1>
        <header className="App-header">
          <SearchBox
            onSearchEngine={onSearchEngine}
            className="search-box"
            placeholder="saerch monsters"
          />
          <CardList monsters={filtredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
