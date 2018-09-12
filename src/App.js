import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  //state is part of Component
  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 28 },
      { id: 'fda', name: 'Manu', age: 29 },
      { id: 'ergwe', name: 'Stephanie', age: 26 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      //execute for each element
      return (p.id === id);
    });

    //make a copy 
    // ES5: const person = Object.assign({}, this.state.persons[personIndex]);
    // ES7: using spread operator
    const person = {
      ...this.state.persons[personIndex]
    };

    //update the person
    person.name = event.target.value;

    // make again a copy 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // finally set the state
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    // console.log(this.state);
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = (index) => {
    console.log('deletePersonHandler', index);
    // never mutate state bit by bit, create a copy (spread operator)
    const persons = [...this.state.persons];
    // mutate
    persons.splice(index, 1);
    // update state
    this.setState({ persons: persons });
  }

  // note: switchNameHandler can be passed as a method in props
  // bind(this, newValue) let's you pass values
  // alternatively you can use () => this.switchNameHandler('Blaaa'), but bind is preferred, because this is inefficient (performance)
  render = () => {

    //following style is scoped, whereas class App is global
    let style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let btnClass = null;
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)} key={person.id} />
          })}
        </div>);

      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons {this.state.showPersons}</button>
        {persons}
      </div>
    );
  };
};

export default App;
