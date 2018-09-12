import React from 'react';
//import Radium from 'radium';
import './Person.css';

const person = (props) => {
    //Uncaught Error: To use plugins requiring `addCSS` (e.g. keyframes, media queries), please wrap your application in the StyleRoot component. Component name: `person`.
    // solution: wrap full app in <StyleRoot>
    const style = {
        // '@media (min-width: 500px)': {
        //     width: '450px'
        // }
    }
    return (<div className="Person" style={style}>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>);
}

//export default Radium(person);
export default person;