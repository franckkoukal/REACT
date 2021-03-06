import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.development';

class App extends Component  {

  constructor() {
    super();
    this.state = {
      monsters: [],  
    }; 
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>  this.setState(() => {
      return {monsters: users}
    }))
  }

  render(){
    return (
      <div className="App">
         {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
          })}  
      </div>
    );
  }

}

export default App;
