import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
      num: 1,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchEngine =(event) => {
    console.log(event);
    this.setState(() => {
      return { searchValue: event.target.value };
    });
    console.log(this.state);
  };
  render() {
    console.log("render");

    const {monsters ,searchValue  } = this.state;
    const{onSearchEngine } = this ;

    const filtredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
    
    return (  
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <input
            className="search-box"
            type="search"
            placeholder="type your search"
            onChange={onSearchEngine}
          />

          {filtredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1> {monster.name}</h1>
              </div>
            );
          })}

          {/* <CardList monsters = {filtredMonsters}/> */}

          {/* <button onClick={() => {
          if(this.state.name.firstName=== "Outhman"){
            this.setState(()=>{
              return{
                name :{
                  firstName: "Omar"
                  }
                };} , ()=>{ console.log(this.state);}) ;

          }else{
            this.setState(()=>{
              return{
                name :{
                  firstName: "Outhman"
                  }
                  };} , ()=>{ console.log(this.state);}) ;
          }
          // console.log(this.state);
          }}> change name </button> */}
        </header>
      </div>
    );
  }
}

export default App;
