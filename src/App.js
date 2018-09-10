import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render = () => (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
  // we need to import React, because under the hood is is used to compile the nested HTML, JSX
  // Alternatively you can use React.createElement('div', {className:'App'}, React.createElement('h1',null,))
  //render = () => React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'hello world'));
};

export default App;
