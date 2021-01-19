
import './App.css';
import { Component } from 'react';

class App extends Component {

  onClick = () => {
    alert('Hello World !')
  }

  render() {
    return (
    <div className="App">
      <h1>Exercice 8</h1>
      <button onClick={this.onClick}>BTN</button>
    </div>
    )
  }
}

export default App;
