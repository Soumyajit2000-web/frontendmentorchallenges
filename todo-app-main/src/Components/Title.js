import React from 'react';
import '../styles/Title.css';
import togglepic from '../images/icon-sun.svg';
import togglepic2 from '../images/icon-moon.svg';

export default function Title(props) {
    return (
        <div className="titleComp">
            <div className="logo">
                <h1>TODO</h1>
            </div>
            <div className="toggleMode" onClick={props.toggleTheme}>
                <img src={props.lightMode ? togglepic2 : togglepic} alt="" />
            </div>
        </div>
    )
}
