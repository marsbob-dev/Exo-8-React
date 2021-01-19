
import './App.css';
import { Component } from 'react';

class App extends Component {

  onClick = () => {
    alert('Hello World !')
  }
  onMouseOver = (e) => {
    console.log(e.target.innerHTML)
  }

  state = {
    nombre: "1"
  }
  render() {
    console.log(this.state.nombre)
    return (
    <div className="App">
      <h1 onMouseOver={this.onMouseOver}>Exercice 8</h1>
      <button onClick={this.onClick}>BTN</button>
    </div>
    )
  }
}

export default App;
