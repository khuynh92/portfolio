export const styles = theme => {

  theme.breakpoints.values.sm = 480;
  theme.breakpoints.values.md = 768;
  theme.breakpoints.values.lg = 1024;

  return {
    appBar: {
      backgroundColor: 'white',
      boxShadow: 'none',
      marginBottom: '0vh',
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