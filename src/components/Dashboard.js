import React, { Component, Fragment } from 'react';
import { withStyles, Card, Grid, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

import chewsit1 from '../assets/chewsit2.png';
import chewsitGif from '../assets/chewsitGif.gif';


const styles = theme => {
  return {
    container: {
      width: '90vw',
      height: '70vh',
      display: 'flex',
      margin: 'auto',
    },
    helperText: {
      width: '100%', 
      textAlign:'center', 
      marginBottom: 10,
    },
    card: {
      backgroundColor: '#337A89',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 450,
      height: '100%',
    },
    secondCard: {
      backgroundColor: '#337A89',
      marginLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 450,
      height: '100%',
    },
    chewsitCard: {
      backgroundColor: '#D36F75',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 450,
      height: '100%',
    },
    chewsitText: {
      fontFamily: 'Oleo Script Swash Caps',
      color: '#ECEBE3',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: '55%',
      marginBottom: 40,
    },
    fadeCard1: {
      backgroundColor: '#ECEBE3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 450,
      height: '100%',
    },
    fadeCard2: {
      marginLeft: 20,
      backgroundColor: '#ECEBE3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 450,
      height: '100%',
    },
    none: {
      display: 'none',
    },
  };
};


class Dashboard extends Component {

  state = {
    chewsit: false,
    chewsit1p0: false,
  }

  onHover = (card) => {
    this.setState({ [card]: true });
  }

  onExit = (card) => {
    this.setState({ [card]: false });
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
            <Typography className={classes.helperText} variant='overline'>Hover over a card to preview project</Typography>
            <div className={classes.cardContainer}>
              <Fade in={!this.state.chewsit} timeout={800}>
                <Card className={!this.state.chewsit ? classes.chewsitCard : classes.none} onMouseEnter={() => this.onHover('chewsit')} onMouseLeave={() => this.onExit('chewsit')}>
                  <Typography variant='h3' className={classes.chewsitText}>chewsit</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.chewsit} timeout={800}>
                <Card className={this.state.chewsit ? classes.fadeCard1 : classes.none} onMouseEnter={() => this.onHover('chewsit')} onMouseLeave={() => this.onExit('chewsit')}>
                  <img src={chewsitGif} style={{ width: '100%' }} />
                </Card>
              </Fade>

              <Card className={classes.secondCard}>
                <h1>project 2</h1>
              </Card>
            </div>
            <div className={classes.cardContainer}>
              <Card className={classes.card}>
                <h1>project 3</h1>
              </Card>
              
              <Fade in={!this.state.chewsit1p0} timeout={800}>
                <Card className={!this.state.chewsit1p0 ? classes.secondCard : classes.none} onMouseEnter={() => this.onHover('chewsit1p0')} onMouseLeave={() => this.onExit('chewsit1p0')}>
                  <Typography variant='h3' className={classes.chewsit1p0Text}>chewsit1p0</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.chewsit1p0} timeout={800}>
                <Card className={this.state.chewsit1p0 ? classes.fadeCard2 : classes.none} onMouseEnter={() => this.onHover('chewsit1p0')} onMouseLeave={() => this.onExit('chewsit1p0')}>
                  <img src={chewsit1} style={{ width: '100%' }} />
                </Card>
              </Fade>
            </div>
          </Grid>
        </Fade>
      </Fragment>
    );
  }

}



export default withStyles(styles)(Dashboard);
