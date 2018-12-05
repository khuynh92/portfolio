import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FileDocumentBoxMultipleOutline, InformationOutline, HomeOutline, Camera } from 'mdi-material-ui';

import { styles } from '../style/navMenuStyles.js';

class NavMenu extends React.Component {
  state = {
    left: false,
    openPreferencesDialog: false,
    openFavoritesDialog: false,

  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClose = () => {
    this.setState({ openPreferencesDialog: false, openFavoritesDialog: false });
  };

  openPreferencesDialog = () => {
    this.setState({ openPreferencesDialog: true });
  }

  openFavoritesDialog = () => {
    this.setState({ openFavoritesDialog: true });
  }



  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Typography className={classes.menu} variant='headline'>Menu</Typography>

        <Link to='/about' className={classes.link}>
          <List className={classes.li}>
            <Button className={classes.button} onClick={this.preferenceRedirect}>
              <InformationOutline />
              <Typography className={classes.listText} variant='body1'>About Me</Typography>
            </ Button>
          </List>
        </Link>
        <Divider />

        <Link to='/projects' className={classes.link}>
          <List className={classes.li}>
            <Button className={classes.button}>
              <FileDocumentBoxMultipleOutline />
              <Typography className={classes.listText} variant='body1'>projects</Typography>
            </ Button>
          </List>
        </Link>
        <Divider />


        <Link to='/photos' className={classes.link}>
          <List className={classes.li}>
            <Button className={classes.button}>
              <Camera />
              <Typography className={classes.listText} variant='body1'>Photography</Typography>
            </ Button>
          </List>
        </Link>
        <Divider />
      </div >
    );

    return (
      <div className={classes.navMenu}>
        <IconButton className={classes.hamburger} onClick={this.toggleDrawer('left', true)} >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavMenu);