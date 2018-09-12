import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  //state is part of Component
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    showPersons: false
  }

  // switchNameHandler() {
  //   console.log('was clicked', this);
  // } // LOG: was clicked undefined -> so with old syntax, 'this' is undefined

  switchNameHandler = (newName) => {
    //this.state.persons[0].name = 'Maximilian'; //Line 16:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    });
  } // LOG: was clicked App {}

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    });
  }

  sayHiHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Bla', age: 28 },
        { name: 'Bla', age: 29 },
        { name: 'Bla', age: 27 },
      ]
    })
  }

  togglePersonsHandler = () => {
    // console.log(this.state);
    this.setState({ showPersons: !this.state.showPersons })
  }


  // note: switchNameHandler can be passed as a method in props
  // bind(this, newValue) let's you pass values
  // alternatively you can use () => this.switchNameHandler('Blaaa'), but bind is preferred, because this is inefficient (performance)
  render = () => {

    //following style is scoped, whereas class App is global
    let style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map(person => { 
            return <Person name={person.name} age={person.age} />
          })}
          <button style={style} onClick={this.switchNameHandler.bind(this, 'Remi')}>Switch name</button>
        </div>);
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons {this.state.showPersons}</button>
        {persons}
        <UserInput />
        <UserOutput username={this.state.persons[0].name} />
        <UserOutput username={this.state.persons[1].name} />

        <button onClick={this.sayHiHandler}>Hi</button>
      </div>
    );
  };
  // we need to import React, because under the hood is is used to compile the nested HTML, JSX
  // Alternatively you can use React.createElement('div', {className:'App'}, React.createElement('h1',null,))
  // render = () => React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello world'));
};

export default App;
