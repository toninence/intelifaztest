import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.nabvar}>
      <Toolbar align="center">
        <Typography variant="subtitle1" align="center" className={classes.link}>
            <NavLink exact to="/" className={classes.link} activeClassName={classes.activeLink}>
              Home
            </NavLink>
            <NavLink exact to="/users" className={classes.link} activeClassName={classes.activeLink}>
              Users
            </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
  },
  link: {
    marginRight: "8px",
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'none',
  },
  activeLink: {
    color:'grey'
  },
  nabvar: {
    marginBottom: '20px',
  }
}));
