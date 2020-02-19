import React from 'react';
import './App.css';
import Login from './components/login/index.js';
import TicTacToe from './components/tictactoe/index.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {login:false};
  }

  loginUser(){
    this.setState({login:true});
  }

  render() {
   return (
     <div>{
      (this.state.login) ?
      <TicTacToe /> :
      <Login loginUser={() => this.loginUser()}/>
     }
     </div>
    )
  }
}

export default App;
