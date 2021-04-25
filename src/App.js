import React from 'react';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import './App.css';
import { MainButton } from './components/MainButton/mainButton.component.jsx';
import PlayerIcon from './images/icons/player.png';
import PlayersIcon from './images/icons/players.png';
import SettingsIcon from './images/icons/settings.png';
import ScoringIcon from './images/icons/scoring.png';
import SaveIcon from './images/icons/save.png';
import LoadIcon from './images/icons/load.png';
import ButtonsIcon from './images/icons/buttons.png';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainButtons: [
        {
          id: 1,
          text: 'PLAYERS',
          status: true,
          icon: PlayersIcon,
        },
        {
          id: 2,
          text: 'SCORING',
          status: false,
          icon: ScoringIcon,
        },
        {
          id: 3,
          text: 'BUTTONS',
          status: false,
          icon: ButtonsIcon,
        },
        {
          id: 4,
          text: 'SETTINGS',
          status: false,
          icon: SettingsIcon,
        },
        {
          id: 5,
          text: 'SAVE',
          status: false,
          icon: SaveIcon,
        },
        {
          id: 6,
          text: 'LOAD',
          status: false,
          icon: LoadIcon,
        },
      ]
    }
    
  }
  
  render() {
    return(
  
      <div className="mainContainer">
        <Grid container>

          <Grid item={true} xs={12} sm={4}>
            <Grid item={true} xs={12}>
              {
                this.state.mainButtons.map(button => (
                  <MainButton key={button.id} buttonId={button.id} buttonText={button.text} buttonStatus={button.status} buttonIcon={button.icon}></MainButton>
                ))
              }
              
            </Grid>

            <Grid  item={true} xs={12}>
              <div className="secondaryButtons">

              </div>
            </Grid>
          </Grid>

          <Grid  item={true} xs={12} sm={8}>
            <div className="mainPage">
              
            </div>
          </Grid>
          <Grid  item={true} xs={12} sm={4}>
            <div className="controlButtons">

              </div>
          </Grid>
          <Hidden xsDown >
            <Grid  item={true} xs={12} sm={6}>
              <div className="greyBar">

              </div>
            </Grid>
            <Grid  item={true} xs={12} sm={1}>
              <div className="darkBlueButton">

              </div>
            </Grid>
            <Grid  item={true} xs={12} sm={1}>
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
