import React from 'react';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import './App.css';
import MainButton from './components/MainButton/mainButton.component.jsx';
import PlayersIcon from './images/icons/players.png';
import SettingsIcon from './images/icons/settings.png';
import ScoringIcon from './images/icons/scoring.png';
import SaveIcon from './images/icons/save.png';
import LoadIcon from './images/icons/load.png';
import ButtonsIcon from './images/icons/buttons.png';
import Player from './components/Player/Player.component.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        { id: 0, name: "Team 1", score: 0, background: '' },
        { id: 1, name: "Team 2", score: 0, background: '' },
        { id: 2, name: "Team 3", score: 0, background: '' },
        { id: 3, name: "Team 4", score: 0, background: '' },
        { id: 4, name: "Team 5", score: 0, background: '' },
        { id: 5, name: "Team 6", score: 0, background: '' },
        { id: 6, name: "Team 7", score: 0, background: '' },
        { id: 7, name: "Team 8", score: 0, background: '' },
        { id: 8, name: "Team 9", score: 0, background: '' }
      ],
      settings: {
        mainButtonSelected: 0,
        playerButtonSelected: 0,

      },
      mainButtons: [
        { id: 0, text: 'PLAYERS',  icon: PlayersIcon },
        { id: 1, text: 'SCORING',  icon: ScoringIcon },
        { id: 2, text: 'BUTTONS',  icon: ButtonsIcon },
        { id: 3, text: 'SETTINGS',  icon: SettingsIcon },
        { id: 4, text: 'SAVE',  icon: SaveIcon },
        { id: 5, text: 'LOAD',  icon: LoadIcon }
      ]
    }
    
  }
  
  render() {
    return(
  
      <div className="mainContainer">
        <Grid container>
          <Grid item={true} xs={12} sm={4}> 
            <div className="mainButtonContainer">
              <Hidden smDown>    
                  <Grid container >
                    {
                      this.state.mainButtons.map(button => (
                        <Grid item={true} xs={4} sm={12} md={6} lg={4} xl={3}>
                          <MainButton key={'mainButton-'+button.id} mainButtonId={button.id} mainButtonText={button.text} mainButtonSelected={this.state.settings.mainButtonSelected} mainButtonIcon={button.icon} />
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

              </div>
            </Grid>
          </Grid>
          
          <Grid  item={true} xs={12} sm={8}>
          
            <div className="mainPage">
              <Hidden smDown> 
                <Grid container>
                {
                  this.state.players.map(player => (
                    <Grid item={true} xs={4} sm={4} md={2} lg={2} xl={2}>
                      <Player key={'playerButton-'+player.id} playerButtonId={player.id} playerButtonName={player.name} playerButtonSelected={this.state.settings.playerButtonSelected} playerBackground={player.background}/>
                    </Grid>
                  ))
                }
                </Grid>
              </Hidden>              
              <Hidden mdUp>
Players Drop Down
              </Hidden>
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
  
    )
  }
}
export default App;
