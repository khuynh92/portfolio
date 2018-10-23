import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';


import Button from '@material-ui/core/Button';
import { FileDocumentBoxMultipleOutline, InformationOutline, HomeOutline, Camera } from 'mdi-material-ui';

import NavMenu from './NavMenu';

const styles = theme => {

  theme.breakpoints.values.sm = 480;
  theme.breakpoints.values.md = 768;
  theme.breakpoints.values.lg = 1024;

  return {
    appBar: {
      backgroundColor: 'white',
      boxShadow: 'none',
      marginBottom: '3vh',
    },
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
      color: '#4E4F4A',
      fontFamily: 'Montserrat',
      fontSize: 24,
    },
    menuButton: {
      paddingTop: 10,
      paddingBottom: 8,
      marginLeft: -12,
      marginRight: 20,
    },
    link: {
      color: '#4E4F4A',
      textDecoration: 'none',
    },
    list: {
      flexDirection: 'row',
      [theme.breakpoints.between('xs', 'sm')]: {
        display: 'none',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        display: 'none',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        display: 'flex',
      },
    },
    listItem: {
      padding: 0,
    },
    listIcon: {
      color: '#4E4F4A',
      marginRight: 2,
    },
    listText: {
      color: '#4E4F4A',
    },
    button: {
      width: 110,
      padding: 0,
      paddingRight: 5,
    },
  };
};

class Navbar extends Component {

  state = {
    homeSlide: false,
    projectsSlide: false,
    aboutSlide: false,
    photosSlide: false,
  }

  itemOnHover = (item) => {
    this.setState({ [item]: true });
  }

  itemOnLeave = (item) => {
    this.setState({ [item]: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>

            <NavMenu />

            <Typography variant="title" className={classes.grow}>Khoa Huynh</Typography>

            <List className={classes.list}>
              <ListItem className={classes.listItem} onMouseLeave={() => this.itemOnLeave('homeSlide')} onMouseEnter={() => this.itemOnHover('homeSlide')}>
                <Link to='/' className={classes.link}>
                  <Button className={classes.button} >
                    <HomeOutline className={classes.listIcon} />
                    <Slide direction='down' in={this.state.homeSlide} timeout={300}>
                      <Typography className={classes.listText} variant='body1'>Home</Typography>
                    </Slide>
                  </Button>
                </Link>
              </ListItem>

              <ListItem className={classes.listItem} onMouseLeave={() => this.itemOnLeave('aboutSlide')} onMouseEnter={() => this.itemOnHover('aboutSlide')}>
                <Link to='/about' className={classes.link}>
                  <Button className={classes.button} >
                    <InformationOutline className={classes.listIcon} />
                    <Slide direction='down' in={this.state.aboutSlide} timeout={300}>
                      <Typography className={classes.listText} variant='body1'>About</Typography>
                    </Slide>
                  </Button>
                </Link>
              </ListItem>

              <ListItem className={classes.listItem} onMouseLeave={() => this.itemOnLeave('projectsSlide')} onMouseEnter={() => this.itemOnHover('projectsSlide')}>
                <Link to='/projects' className={classes.link}>
                  <Button className={classes.button} >
                    <FileDocumentBoxMultipleOutline className={classes.listIcon} />
                    <Slide direction='down' in={this.state.projectsSlide} timeout={300}>
                      <Typography className={classes.listText} variant='body1'>Projects</Typography>
                    </Slide>
                  </Button>
                </Link>
              </ListItem>

              <ListItem className={classes.listItem} onMouseLeave={() => this.itemOnLeave('photosSlide')} onMouseEnter={() => this.itemOnHover('photosSlide')}>
                <Link to='/photos' className={classes.link}>
                  <Button className={classes.button} >
                    <Camera className={classes.listIcon} />
                    <Slide direction='down' in={this.state.photosSlide} timeout={300}>
                      <Typography className={classes.listText} variant='body1'>Photos</Typography>
                    </Slide>
                  </Button>
                </Link>
              </ListItem>

            </List>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(styles)(Navbar);