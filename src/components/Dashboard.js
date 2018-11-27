import React, { Component, Fragment } from 'react';
import { withStyles, Card, Grid, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

import chewsitGif from '../assets/chewsitGif.gif';
import weightedRandomizerGif from '../assets/weightedRandomizerGif.gif';
import chewsit1p0Gif from '../assets/chewsit1p0Gif.gif';
import simpleServerGif from '../assets/simpleServerGif.gif';
import etapGif from '../assets/etapGif.gif';

import { styles } from '../style/dashboardStyles.js';

class Dashboard extends Component {

  state = {
    chewsit: false,
    etap: false,
    simpleServer: false,
    weightedRandomizer: false,
  }

  onHover = (card) => {
    this.setState({ [card]: true });
  }

  onExit = (card) => {
    this.setState({ [card]: false });
  }

  cardClicked = (card) => {
    if (card === 'chewsit') window.location.href = 'https://chewsit.site';

    if (card === 'weightedRandomizer') window.location.href = 'https://www.npmjs.com/package/@icantbelieveitsnotrandom/weighted-randomizer';

    if (card === 'simpleServer') window.location.href = 'https://github.com/khuynh92/simple-auth';

    if (card === 'etap') window.location.href = 'https://sgc2018-etap-web.herokuapp.com/';
  }

 

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Fade in={true} timeout={600}>
          <Grid
            container
            className={classes.container}
          >
            <Typography className={classes.helperText} variant='overline'>Hover over a card to preview project. Click to view project.</Typography>

            <div className={classes.cardContainer}>

              <Fade in={!this.state.chewsit} timeout={800}>
                <Card className={!this.state.chewsit ? classes.chewsitCard : classes.none} onMouseEnter={() => this.onHover('chewsit')} onClick={() => this.cardClicked('chewsit')} >
                  <Typography variant='h3' className={classes.chewsitText}>chewsit</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.chewsit} timeout={800}>
                <Card className={this.state.chewsit ? classes.chewsitFadeCard : classes.none} onMouseLeave={() => this.onExit('chewsit')} onClick={() => this.cardClicked('chewsit')} >
                  <img src={chewsitGif} style={{ width: '100%' }} />
                </Card>
              </Fade>

              <Fade in={!this.state.etap} timeout={800}>
                <Card className={!this.state.etap ? classes.etapCard : classes.none} onMouseEnter={() => this.onHover('etap')} onMouseLeave={() => this.onExit('etap')} onClick={() => this.cardClicked('etap')} >
                  <Typography variant='h3' className={classes.etapText}>Electronic ETAP</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.etap} timeout={800}>
                <Card className={this.state.etap ? classes.etapFadeCard : classes.none} onMouseEnter={() => this.onHover('etap')} onMouseLeave={() => this.onExit('etap')} onClick={() => this.cardClicked('etap')} >
                  <img src={etapGif} style={{ height: '95%', borderRadius: 5 }} />
                </Card>
              </Fade>

            </div>

            <div className={classes.cardContainer}>
            
              <Fade in={!this.state.simpleServer} timeout={800}>
                <Card className={!this.state.simpleServer ? classes.card : classes.none} onMouseEnter={() => this.onHover('simpleServer')} onClick={() => this.cardClicked('simpleServer')} >
                  <Typography variant='h3' className={classes.weightedRandomizerText}>Simple Server</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.simpleServer} timeout={800}>
                <Card className={this.state.simpleServer ? classes.simpleServerFadeCard : classes.none} onMouseLeave={() => this.onExit('simpleServer')} onClick={() => this.cardClicked('simpleServer')} >
                  <img src={simpleServerGif} style={{ width: '100%' }} />
                </Card>
              </Fade>

              <Fade in={!this.state.weightedRandomizer} timeout={800}>
                <Card className={!this.state.weightedRandomizer ? classes.weightedRandomizerCard : classes.none} onMouseEnter={() => this.onHover('weightedRandomizer')} onClick={() => this.cardClicked('weightedRandomizer')} >
                  <Typography variant='h3' className={classes.weightedRandomizerText}>Weighted Randomizer</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.weightedRandomizer} timeout={800}>
                <Card className={this.state.weightedRandomizer ? classes.weightedRandomizerFadeCard : classes.none} onMouseLeave={() => this.onExit('weightedRandomizer')} onClick={() => this.cardClicked('weightedRandomizer')} >
                  <img src={weightedRandomizerGif} style={{ width: '100%' }} />
                </Card>
              </Fade>

            </div>
          </Grid>
        </Fade>
      </Fragment >
    );
  }

}



export default withStyles(styles)(Dashboard);
