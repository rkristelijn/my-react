import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state is part of Component
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ]
  }

  switchNameHandler = (newName) => {
    //this.state.persons[0].name = 'Maximilian'; //Line 16:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    this.setState({persons:[
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 },
    ]});
  } // LOG: was clicked App {}

  // switchNameHandler() {
  //   console.log('was clicked', this);
  // } // LOG: was clicked undefined -> so with old syntax, 'this' is undefined
  // note: switchNameHandler can be passed as a method in props
  // bind(this, newValue) let's you pass values
  // alternatively you can use () => this.switchNameHandler('Blaaa'), but bind is preferred, because this is inefficient (performance)
  render = () => (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={() => this.switchNameHandler('Blaaa')} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      <button onClick={this.switchNameHandler.bind(this, 'Remi')}>Switch name</button>
    </div>
  );
  // we need to import React, because under the hood is is used to compile the nested HTML, JSX
  // Alternatively you can use React.createElement('div', {className:'App'}, React.createElement('h1',null,))
  //render = () => React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello world'));
};

export default App;
