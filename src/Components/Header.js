import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="secondary"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title} id="header-typography">
          <span id="F">F</span>inding <span id="F">F</span>alcone
        </Typography>
        <Button color="secondary">Home</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
