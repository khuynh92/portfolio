import React, { Component, Fragment } from 'react';
import { withStyles, Card, Grid, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

import chewsitGif from '../assets/chewsitGif.gif';
import weightedRandomizerGif from '../assets/weightedRandomizerGif.gif';
import chewsit1p0Gif from '../assets/chewsit1p0Gif.gif';
import simpleServerGif from '../assets/simpleServerGif.gif';
import etapGif from '../assets/etapGif.gif';

const styles = theme => {
  theme.breakpoints.values.sm = 480;
  theme.breakpoints.values.md = 768;
  theme.breakpoints.values.lg = 1024;
  return {
    container: {
      width: '90vw',
      height: '70vh',
      display: 'flex',
      margin: 'auto',
    },
    helperText: {
      width: '100%',
      textAlign: 'center',
      marginBottom: 10,
    },
    card: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },

      backgroundColor: '#337A89',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    secondCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      backgroundColor: '#337A89',
      marginLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    cardContainer: {
      [theme.breakpoints.between('xs', 'sm')]: {
        flexDirection: 'column',
        margin: 'auto',
        marginBottom: 0,
        height: '90%',
        minHeight: 650,
      },
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: '55%',
      maxHeight: 325,
      marginBottom: 20,
    },
    chewsitCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      backgroundColor: '#D36F75',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    chewsitText: {
      fontFamily: 'Oleo Script Swash Caps',
      color: '#ECEBE3',
      fontSize: '4rem',
    },
    chewsitFadeCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      backgroundColor: '#ECEBE3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    weightedRandomizerCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      marginLeft: 20,
      backgroundColor: '#3f51b5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    weightedRandomizerFadeCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      marginLeft: 20,
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    weightedRandomizerText: {
      paddingLeft: 10,
      paddingRight: 10,
      color: '#ECEBE3',
      fontWeight: 'bold',
      fontSize: '2.5rem',
      margin: 'auto',
      textAlign: 'center',
    },
    etapCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      marginLeft: 20,
      backgroundColor: '#60783A',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    etapFadeCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      marginLeft: 20,
      backgroundColor: '#60783A',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    etapText: {
      color: '#ECEBE3',
      fontWeight: 'bold',
      fontSize: '2.5rem',
      margin: 'auto',
      textAlign: 'center',
    },
    simpleServerFadeCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    none: {
      display: 'none',
    },
  };
};


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
          </Grid>
        </Fade>
      </Fragment >
    );
  }

}



export default withStyles(styles)(Dashboard);
