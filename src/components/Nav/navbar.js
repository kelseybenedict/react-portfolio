import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                    <Typography variant="h6" className={classes.title}>
                        Kelsey Benedict
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Portfolio</Button>
                    <Button color="inherit">Contact</Button>
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
