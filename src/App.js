import React, { Component } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';
import Userinput from './Components/UserInput';
import Count from './Components/Count';
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends Component {
 

  state = {
    username: 'Kyle',
    count: 0,
    userInput: '',
    

  }

usernameHandler =(event)=>{
  this.setState({
    username: event.target.value,
  })
}
addCountHandler=(event)=>{
  let newCount = this.state.count +1;
  this.setState({
    count: newCount,

  })

}
subCountHandler=(event)=>{
  let newCount = this.state.count -1;
  this.setState({
    count: newCount,

  })

}


resetCountHandler=(event)=>{
  
  this.setState({
    count: 0,

  })

}

inputChangeHandler = (event)=>{

  this.setState({
    userInput: event.target.value,
  })

}

  deleteCharHandler = (index) =>{
    const delChar = this.state.userInput.split('');
    delChar.splice(index,1);
    const updatedText = delChar.join('');

    this.setState({
      userInput: updatedText
    })
  }


  render() {

    const charList = this.state.userInput.split('').map((cur, index) => {
        return <Char 
        character={cur} 
        key={index}
        clicked = {()=>this.deleteCharHandler(index)}/>
    });
    return (
      <div className="App">
        <Userinput 
        change={this.usernameHandler}        
        currentName = {this.state.username} 
        newoutput = {this.addUsername}/>
        <UserOutput 
        username ={this.state.username}/>
        <Count 
        count={this.state.count}
        add={this.addCountHandler}
        sub ={this.subCountHandler}
        reset= {this.resetCountHandler}/>
        
        <input 
        type='text'
        onChange={this.inputChangeHandler}
        value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation 
        inputLength = {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
