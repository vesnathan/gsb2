import React from 'react';
import './mainButton.component.css';


const handleMainButtonClick = (e) => {
    console.log(e.target.id)
    
  }

export const MainButton = (props) => (
    <div id={props.buttonText} className={"mainButton " + (props.buttonStatus? 'active':'') } onClick={(e) => handleMainButtonClick(e)} >
        <img alt={props.buttonText +' icon'} src={props.buttonIcon} />
        {props.buttonText}
    </div>
);