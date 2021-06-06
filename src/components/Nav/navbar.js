import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./navbar.css";

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

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/about" className={window.location.pathname === "/about"}><Typography variant="h6" className={classes.title}>
                        Kelsey Benedict
                    </Typography></Link>
                    <Link to="/about" className={window.location.pathname === "/about"}>
                        <Button id="aboutButton">About</Button>
                    </Link>
                    <Link to="/portfolio" className="links">
                        <Button>Portfolio</Button></Link>
                    <Link to="/contact" className="links"><Button>Contact</Button></Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;
