import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';


import Button from '@material-ui/core/Button';
import { FileDocumentBoxMultipleOutline, InformationOutline, Camera } from 'mdi-material-ui';

import NavMenu from './NavMenu';

import { styles } from '../style/navbarStyles.js';

class Navbar extends Component {

  state = {
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

  // homeRedirect = () => {
  //   window.location.href = 'https://sgc2018-etap-web.herokuapp.com/';
  // }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>

            <NavMenu />

            <Link to='/' className={classes.grow}>
              <Typography className={classes.titleText} variant="title" onClick={this.homeRedirect}>Khoa Huynh</Typography>
            </Link>

            <List className={classes.list}>

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