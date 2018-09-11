import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state is part of Component
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stepanie', age: 26 },
    ]
  }

  switchNameHandler = () => {
    //this.state.persons[0].name = 'Maximilian'; //Line 16:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    this.setState({persons:[
      { name: 'Maximilian', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stepanie', age: 27 },
    ]});
  } // LOG: was clicked App {}

  // switchNameHandler() {
  //   console.log('was clicked', this);
  // } // LOG: was clicked undefined 

  render = () => (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      <button onClick={this.switchNameHandler}>Switch name</button>
    </div>
  );
  // we need to import React, because under the hood is is used to compile the nested HTML, JSX
  // Alternatively you can use React.createElement('div', {className:'App'}, React.createElement('h1',null,))
  //render = () => React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello world'));
};

export default App;
