import React, { useState }  from 'react';
import Grid                 from '@material-ui/core/Grid'
import Hidden               from '@material-ui/core/Hidden';
import                         './App.css';

import addPlayerIcon        from './images/icons/addPlayer.png';
import deletePlayerIcon     from './images/icons/deletePlayer.png';
import PlayersIcon          from './images/icons/players.png';
import SettingsIcon         from './images/icons/settings.png';
import ScoringIcon          from './images/icons/scoring.png';
import SaveIcon             from './images/icons/save.png';
import LoadIcon             from './images/icons/load.png';
import ButtonsIcon          from './images/icons/buttons.png';
import MainBg               from './images/background/bg.jpg';

import MainButton           from './components/MainButton/mainButton.component.jsx';
import Player               from './components/Player/Player.component.jsx';
import PlayerSettings       from './components/playerSettings/playerSettings.component.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  const players = [
    { id: 0, name: "Beer Make Smart",   score: 0, background: '' },
    { id: 1, name: "Hot Load of Quiz",  score: 0, background: '' },
    { id: 2, name: "Not That",          score: 0, background: '' },
    { id: 3, name: "Team 4",            score: 0, background: '' }
  ];

  const [mainButtonSelected, setMainButtonSelected] = useState(null);
  const [playerButtonSelected, setPlayerButtonSelected] = useState(null);

  const mainButtons = [
    { id: 0, text: 'players',   icon: PlayersIcon },
    { id: 1, text: 'scoring',   icon: ScoringIcon },
    { id: 2, text: 'buttons',   icon: ButtonsIcon },
    { id: 3, text: 'settings',  icon: SettingsIcon },
    { id: 4, text: 'save',      icon: SaveIcon },
    { id: 5, text: 'load',      icon: LoadIcon }
  ];

  const controlButtons = [
    { id: 0, text: 'addPlayer',     mainButtonAssociation: 0,     icon: addPlayerIcon },
    { id: 1, text: 'deletePlayer',  mainButtonAssociation: 0,     icon: deletePlayerIcon }
  ];
  function setPlayerButtonActive(value){
    setPlayerButtonSelected(value);
  }
  function setMainButtonActive(value){
    if (value === 0) { // players button
      setPlayerButtonSelected(null);
    }
    setMainButtonSelected(value);
  }
  return (
    <Router>
      <div className="mainContainer">
        <Grid container>
          <Grid item={true} xs={12} sm={4}> 
            <div className="mainButtonContainer">
              <Hidden smDown>    
                  <Grid container >
                    {
                      mainButtons.map(button => (
                        <Grid           item=                 { true } 
                                        xs=                   { 4 } 
                                        sm=                   { 12 } 
                                        md=                   { 6 } 
                                        lg=                   { 4 } 
                                        xl=                   { 3 } 
                                        key=                  { 'mainButtonGrid-'+button.id } >

                          <Link         key=                  { 'mainButtonLink-'+button.id } 
                                        to=                   { '/'+button.text } >

                            <MainButton key=                  { 'mainButton-'+button.id } 
                                        setMainButtonActive = { setMainButtonActive } 
                                        mainButtonId=         { button.id } 
                                        mainButtonText=       { button.text } 
                                        mainButtonSelected=   { mainButtonSelected } 
                                        mainButtonIcon=       { button.icon }/>
                                       
                          </Link> 
                        </Grid>
                      )) 
                    }
                  </Grid>
              </Hidden>
              <Hidden mdUp>
                Main Buttons Drop Down
              </Hidden>
            </div>
            <Grid  item={true} xs={12}  >
              
              <div className="secondaryButtons">
              <Route path="/players">
                <Hidden mdDown>
                  <Grid container>
                    {
                      players.map(player => (
                        <Grid       key=                      { 'playerButtonLink-'+player.id } 
                                    item=                     { true } 
                                    xs=                       { 4 } 
                                    sm=                       { 12 } 
                                    md=                       { 6 } 
                                    lg=                       { 4 } 
                                    xl=                       { 3 }  >

                          <Link     key=                      { 'playerButtonLink-'+player.id } 
                                    to=                       { '/players/player'+player.id }>

                            <Player key=                      { 'playerButton-'+player.id } 
                                    setPlayerButtonActive =   { setPlayerButtonActive } 
                                    playerButtonId=           { player.id } 
                                    playerButtonName=         { player.name } 
                                    playerButtonSelected=     { playerButtonSelected } 
                                    playerBackground=         { player.background }/>

                          </Link>
                        </Grid>
                      ))
                    }
                  </Grid>
                </Hidden>
                <Hidden lgUp>
                  Players Drop Down
                </Hidden>
                </Route>
              </div>
            </Grid>
          </Grid>  
          <Grid                     item=       { true } 
                                    xs=         { 12 } 
                                    sm=         { 8 } >
            <div className="mainPage">
              {
                players.map(player => (
                <Route              path=       { '/players/player'+player.id } 
                                    key=        { 'playerSettingsRoute-'+player.id }>

                    <PlayerSettings key=        { 'playerSettings-'+player.id } 
                                    playerId =  { player.id } /> 
                </Route>  
                ))
              }       
            </div>      
          </Grid>
          <Grid  item={true} xs={12} sm={4} >
            <div className="controlButtons">

            </div>
          </Grid>
          <Hidden xsDown>
            <Grid  item={true} xs={12} sm={4} lg={6}>
              <div className="greyBar">

              </div>
            </Grid>
            <Grid  item={true} xs={12} sm={2}  lg={1}>
              <div className="darkBlueButton">

              </div>
            </Grid>
            <Grid  item={true} xs={12} sm={2}  lg={1}>
              <div className="lightBlueButton">

              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
      </Router>
    ) 
  }


export default App;

