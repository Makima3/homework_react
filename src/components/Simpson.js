import React from "react";

const Simpson = ({value}) => {
    const {name, surname, age, info, photo} = value
    return (
        <div>
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>
            <div>Info:{info}</div>
            <img src = {photo} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};

