import React from 'react';
import './playerSettings.component.css';

const PlayerSettings = (props) => {
    return (

        <div id     = { 'playerSettings-'+props.playerId }
             key    = { 'playerSettings-'+props.playerId } >
                        PlayerSettings{+props.playerId}
        </div>

    );
}
export default PlayerSettings;