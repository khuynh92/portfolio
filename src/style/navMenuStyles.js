export const styles = theme => {

  theme.breakpoints.values.sm = 480;
  theme.breakpoints.values.md = 768;
  theme.breakpoints.values.lg = 1024;

  return {
    navMenu: {
      [theme.breakpoints.between('md', 'xl')]: {
        display: 'none',
      },
    },
    list: {
      width: 250,
      marginTop: 10,
    },
    li: {
      marginTop: 20,
      marginBottom: 20,
    },
    button: {
      width: '100%',
      justifyContent: 'left',
      paddingLeft: 40,
    },
    listText: {
      marginLeft: 20,
    },
    menu: {
      textAlign: 'center',
    },
    liLogout: {
      position: 'fixed',
      top: '90vh',
      width: '100%',
    },
    logoutButton: {
      paddingLeft: 0,
      width: '100%',
    },
    link: {
      textDecoration: 'none',
    },
    menuIcon: {
      color: '#536462',
    },
    hamburger: {
      marginRight: 20,
    },
  };
};