import React from 'react';
import './mainButton.component.css';


const handleMainButtonClick = (e) => {
    console.log(e.target.id)
    
  }

const MainButton = (props) => (
    <div id={'mainButtonDiv-'+props.mainButtonId} className={"mainButton" + ((props.mainButtonSelected===props.mainButtonId) ? ' active':'') } onClick={(e) => handleMainButtonClick(e)} >
        <img id={'mainButtonImg-'+props.mainButtonId} alt={props.mainButtonText +' icon'} src={props.mainButtonIcon} />
        <p id={'mainButtonName-'+props.mainButtonId} >{props.mainButtonText}</p>
    </div>
);

export default MainButton;