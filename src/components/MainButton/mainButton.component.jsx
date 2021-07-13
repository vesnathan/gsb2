import React from 'react';
import './mainButton.component.css';




const MainButton = (props) => (

    <div tabIndex   = "0" 
         key        = { props.mainButtonText +' div' }
         onClick    = { () => props.setMainButtonActive(props.mainButtonId)} 
         className  = { "mainButton" + ((props.mainButtonSelected===props.mainButtonId) ? ' active':'') }  >

        <img key    = { props.mainButtonText +' icon' }
             alt    = { props.mainButtonText +' icon' } 
             src    = { props.mainButtonIcon } />

        <p   key    = { props.mainButtonText +' para' } >
                      { props.mainButtonText.toUpperCase() }</p>

    </div>

);

export default MainButton;