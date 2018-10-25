import React, { Component, Fragment } from 'react';
import { withStyles, Card, Grid, Typography, Paper, Button, Collapse } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

import { ChevronDoubleLeft, ChevronDoubleRight } from 'mdi-material-ui';


import chewsitGif from '../assets/chewsitGif.gif';
import weightedRandomizerGif from '../assets/weightedRandomizerGif.gif';
import chewsit1p0Gif from '../assets/chewsit1p0Gif.gif';
import simpleServerGif from '../assets/simpleServerGif.gif';

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
        width: '100%',
        height: '90%',
        minHeight: 450,
      },
      justifyContent: 'center',
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'row',
      margin: 'auto',
      width: '100%',
      height: '55%',
      maxHeight: 325,
      marginBottom: 40,
    },
    chewsitCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      float: 'left',
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
    chewsit1p0Card: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      backgroundColor: '#252931',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    chewsit1p0FadeCard: {
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        margin: 'auto',
        marginBottom: 25,
      },
      backgroundColor: '#252931',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      maxWidth: 400,
      height: '100%',
      cursor: 'pointer',
    },
    chewsit1p0Text: {
      letterSpacing: 1.5,
      fontFamily: 'Titan One',
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
    verticalText: {
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
    },
    expandButton: {
      marginLeft: -15,
      width: '100%',
      height: '100%',
    },
    expandCard: {
      width: '40%',
    },
    expandCardContainer: {
      [theme.breakpoints.between('xs', 'sm')]: {
        flexDirection: 'column',
        margin: 'auto',
        marginBottom: 0,
        width: '100%',
        height: '90%',
        minHeight: 450,
      },
      margin: 'auto',
      width: '100%',
      height: '55%',
      maxHeight: 325,
      marginBottom: 40,
      maxWidth: 940,
    },
  };

};


class Projects extends Component {

  state = {
    chewsit: false,
    chewsit1p0: false,
    simpleServer: false,
    weightedRandomizer: false,
    expandChewsit: true,
    expandChewsit1p0: true,
    expandSimpleServer: true,
    expandWeightedRandomizer: true,
  }

  onHover = (card) => {
    this.setState({ [card]: true });
  }

  onExit = (card) => {
    this.setState({ [card]: false });
  }

  cardClicked = (card) => {
    this.setState({ [card]: true });
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

            <Paper className={this.state.expandChewsit ? classes.expandCardContainer : classes.cardContainer}>
              <Fade in={!this.state.chewsit} timeout={800}>
                <Card className={!this.state.chewsit ? classes.chewsitCard : classes.none} onMouseEnter={() => this.onHover('chewsit')} >
                  <Typography variant='h3' className={classes.chewsitText}>chewsit</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.chewsit} timeout={800}>
                <Card className={this.state.chewsit ? classes.chewsitFadeCard : classes.none} onMouseLeave={() => this.onExit('chewsit')} >
                  <img src={chewsitGif} style={{ width: '100%' }} />
                </Card>
              </Fade>
              {
                !this.state.expandChewsit
                && <Card style={{ width: 30 }}>
                  <Button className={classes.expandButton} onClick={() => this.cardClicked('expandChewsit')} >
                    <div>
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Typography variant='overline' className={classes.verticalText}>
                        Expand
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                    </div>
                  </Button>
                </Card>
              }
              {
                this.state.expandChewsit &&
                <div style={{ width: '100%' }}>
                  {/* <div style={{width: '80%', margin: 'auto'}}> */}
                  <div>
                    <Typography variant='h6' style={{ textAlign: 'center', paddingTop: 10 }}>
                      <a href='https://chewsit.site' target='_blank' rel='noopener noreferrer'>https://chewsit.site</a>
                    </Typography>
                   
                  </div>
                  <Typography variant='body2'>
                    Chewsit is a simplified food discovery website that helps users decide where to eat. Users can set preferences for types of food that they enjoy, and also save favorite restaurants. Guests are allowed to try the application with limited access
                  </Typography>
                  <Typography variant='body1'><strong>Technologies Used:</strong></Typography>
                  <ul>
                    <li>React.js</li>
                    <li>Redux.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDb</li>
                    <li>Material UI</li>
                    <li>OAuth2.0</li>
             
                  </ul>
                  {/* </div> */}
                </div>
              }
            </Paper>

            <Paper className={this.state.expandWeightedRandomizer ? classes.expandCardContainer : classes.cardContainer}>
              <Fade in={!this.state.weightedRandomizer} timeout={800}>
                <Card className={!this.state.weightedRandomizer ? classes.weightedRandomizerCard : classes.none} onMouseEnter={() => this.onHover('weightedRandomizer')} >
                  <Typography variant='h3' className={classes.weightedRandomizerText}>Weighted Randomizer</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.weightedRandomizer} timeout={800}>
                <Card className={this.state.weightedRandomizer ? classes.weightedRandomizerFadeCard : classes.none} onMouseLeave={() => this.onExit('weightedRandomizer')}>
                  <img src={weightedRandomizerGif} style={{ width: '100%' }} />
                </Card>
              </Fade>
              {
                !this.state.expandWeightedRandomizer
                && <Card style={{ width: 30 }}>
                  <Button className={classes.expandButton} onClick={() => this.cardClicked('expandWeightedRandomizer')} >
                    <div>
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Typography variant='overline' className={classes.verticalText}>
                        Expand
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                    </div>
                  </Button>
                </Card>
              }
            </Paper>

            <Paper className={this.state.expandSimpleServer ? classes.expandCardContainer : classes.cardContainer}>
              <Fade in={!this.state.simpleServer} timeout={800}>
                <Card className={!this.state.simpleServer ? classes.card : classes.none} onMouseEnter={() => this.onHover('simpleServer')} >
                  <Typography variant='h3' className={classes.weightedRandomizerText}>Simple Server</Typography>
                </Card>
              </Fade>
              <Fade in={this.state.simpleServer} timeout={800}>
                <Card className={this.state.simpleServer ? classes.simpleServerFadeCard : classes.none} onMouseLeave={() => this.onExit('simpleServer')}>
                  <img src={simpleServerGif} style={{ width: '100%' }} />
                </Card>
              </Fade>
              {
                !this.state.expandSimpleServer
                && <Card style={{ width: 30 }}>
                  <Button className={classes.expandButton} onClick={() => this.cardClicked('expandSimpleServer')} >
                    <div>
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Typography variant='overline' className={classes.verticalText}>
                        Expand
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                    </div>
                  </Button>
                </Card>
              }
            </Paper>

            <Paper className={this.state.expandChewsit1p0 ? classes.expandCardContainer : classes.cardContainer}>
              <Fade in={!this.state.chewsit1p0} timeout={800}>
                <Card className={!this.state.chewsit1p0 ? classes.chewsit1p0Card : classes.none} onMouseEnter={() => this.onHover('chewsit1p0')} onMouseLeave={() => this.onExit('chewsit1p0')}>
                  <Typography variant='h3' className={classes.chewsit1p0Text}>chewsit <br /> <span style={{ fontFamily: 'Titan One', fontSize: 28 }}>1.0</span></Typography>
                </Card>
              </Fade>
              <Fade in={this.state.chewsit1p0} timeout={800}>
                <Card className={this.state.chewsit1p0 ? classes.chewsit1p0FadeCard : classes.none} onMouseEnter={() => this.onHover('chewsit1p0')} onMouseLeave={() => this.onExit('chewsit1p0')}>
                  <img src={chewsit1p0Gif} style={{ width: '100%' }} />
                </Card>
              </Fade>
              {
                !this.state.expandChewsit1p0
                && <Card style={{ width: 30 }}>
                  <Button className={classes.expandButton} onClick={() => this.cardClicked('expandChewsit1p0')} >
                    <div>
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Typography variant='overline' className={classes.verticalText}>
                        Expand
                      </Typography>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <ChevronDoubleRight style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }} />
                    </div>
                  </Button>
                </Card>
              }
            </Paper>

          </Grid>
        </Fade>
      </Fragment>
    );
  }

}



export default withStyles(styles)(Projects);
