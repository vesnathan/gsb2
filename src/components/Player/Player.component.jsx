import React from 'react';
import PlayerIcon from '../../images/icons/player.png';
import './Player.component.css';

const Player = (props) => {
    return (
        <div id={ 'playerButtonDiv-'+props.playerButtonId } className={'playerButton' + (props.playerButtonSelected === props.playerButtonId ? ' active':'')}>
            <img id={ 'playerButtonImg-'+props.playerButtonId } alt={props.playerButtonName + ' Settings'} src={props.playerBackground === ''  ? PlayerIcon : props.playerBackground} />
            <p id={ 'playerButtonName-'+props.playerButtonId }>{props.playerButtonName}</p> 
        </div>
    );
};

export default Player;