import React from 'react';

const Nav = (props) => {
	const buttonText =(props.showGreased) ?  'All' : 'Graced only';
    return (
        <div className="navWrapper">
            <button onClick={() => props.sortHandler('name')}>Sort by Name</button>
            <button onClick={() => props.sortHandler('weight')}>Sort by Weight</button>
            <button onClick={() => props.greaseFilter()}>{buttonText}</button>
        </div>
    );
};

export default Nav;
