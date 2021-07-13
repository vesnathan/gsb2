import React, {useState} from 'react';
import PlayerIcon from '../../images/icons/player.png';
import './player.component.css';


const Player = (props) => {
    
    const [playerName, setPlayerName] = useState(props.playerButtonName.toUpperCase());

    return (

        <div tabIndex   = "0" 
             key        = { props.playerButtonName + ' Settings' }  
             onClick    = { () => props.setPlayerButtonActive(props.playerButtonId) } 
             className  = { 'playerButton' + (props.playerButtonSelected === props.playerButtonId ? ' active':'') }>

            <img
                 key    = { props.playerButtonName + ' Settings' } 
                 alt    = { props.playerButtonName + ' Settings' } 
                 src    = { PlayerIcon } />

            <p   key    = { props.playerButtonName + ' para' } >           
                          { playerName }</p> 
            
        </div>

    );
};

export default Player;