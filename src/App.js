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
        { id: "1", name: "Team 1", score: 0, background: '', buttonStatus: true },
        { id: "2", name: "Team 2", score: 0, background: '', buttonStatus: false  },
        { id: "3", name: "Team 3", score: 0, background: '', buttonStatus: false  },
        { id: "4", name: "Team 4", score: 0, background: '', buttonStatus: false  },
        { id: "5", name: "Team 5", score: 0, background: '', buttonStatus: false  },
        { id: "6", name: "Team 6", score: 0, background: '', buttonStatus: false  },
        { id: "7", name: "Team 7", score: 0, background: '', buttonStatus: false  },
        { id: "8", name: "Team 8", score: 0, background: '', buttonStatus: false  },
        { id: "9", name: "Team 9", score: 0, background: '', buttonStatus: false  }
      ],
      settings: [],
      mainButtons: [
        { id: 1, text: 'PLAYERS', status: true, icon: PlayersIcon },
        { id: 2, text: 'SCORING', status: false, icon: ScoringIcon },
        { id: 3, text: 'BUTTONS', status: false, icon: ButtonsIcon },
        { id: 4, text: 'SETTINGS', status: false, icon: SettingsIcon },
        { id: 5, text: 'SAVE', status: false, icon: SaveIcon },
        { id: 6, text: 'LOAD', status: false, icon: LoadIcon }
      ]
    }
    
  }
  
  render() {
    return(
  
      <div className="mainContainer">
        <Grid container>
          <Grid item={true} xs={12} sm={4}>       
            <div className="mainButtonContainer">
              <Grid container >
                {
                  this.state.mainButtons.map(button => (
                    <Grid item={true} xs={4} sm={12} md={6} lg={4} xl={3}>
                      <MainButton key={button.id} buttonId={button.id} buttonText={button.text} buttonStatus={button.status} buttonIcon={button.icon} />
                    </Grid>
                  ))
                }
              </Grid>
            </div>
          </Grid>
          
          <Grid  item={true} xs={12} sm={8}>
            <div className="mainPage">
              {/* whenClicked is a property not an event, per se. */}
            <Grid container >
             {
                this.state.players.map(player => (
                  <Grid item={true} xs={4} sm={4} md={2} lg={2} xl={2}>
                  <Player key={player.id} playerId={player.id} playerName={player.name} playerButtonStatus={player.buttonStatus} />
                  </Grid>
                ))
              }
              </Grid>
            </div>
          </Grid>
          <Grid  item={true} xs={12} sm={4} >
            <div className="controlButtons">

              </div>
          </Grid>
          <Hidden xsDown >
            <Grid  item={true} sm={4} lg={6}>
              <div className="greyBar">

              </div>
            </Grid>
            <Grid  item={true} sm={2} lg={1}>
              <div className="darkBlueButton">

              </div>
            </Grid>
            <Grid  item={true} sm={2} lg={1}>
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
