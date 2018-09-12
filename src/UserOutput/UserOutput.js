import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p className="UserOutput">hello {props.username} </p>
            <p className="UserOutput">how are you?</p>
        </div>
    );
}

export default userOutput;