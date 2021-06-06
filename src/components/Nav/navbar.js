import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from "react-router-dom";

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
                    <Link to="/about"><Typography variant="h6" className={classes.title}>
                        Kelsey Benedict
                    </Typography></Link>
                    <Link to="/about">
                        <Button color="inherit" >About</Button>
                    </Link>
                    <Link to="/portfolio"><Button color="inherit">Portfolio</Button></Link>
                    <Link to="/contact"><Button color="inherit">Contact</Button></Link>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="github">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="linkedin">
                        <LinkedInIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;
