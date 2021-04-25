import React from 'react';
import PlayerIcon from '../../images/icons/player.png';
import './Player.component.css';

const Player = (props) => {
    return (
        <div className='playerButton'>
            <img alt="player" src={PlayerIcon} />
            { props.playerName }
        </div>
    );
};

export default Player;