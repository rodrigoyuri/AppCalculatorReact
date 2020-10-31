import React from 'react';
import './Button.css';

const Button = (props) => {
    let classes = "button ";
    classes += `${props.ButtonAc ? " button-ac" : ""}`;
    classes += `${props.ButtonEqual ? " button-equal" : ""}`;
    classes += `${props.Transparency ? " button-transparency" : ""}`;

    return(
        <button 
            className={classes} 
            onClick={
                () => props.click && props.click(props.label)
            }>{props.label}</button>
    );
}

export default Button;