import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import DescriptionIcon from '@material-ui/icons/Description';
import Resume from "../../images/resumeUpdated.pdf";

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

function Contact() {
    const classes = useStyles();
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Email:</h5>
                                <p className="card-text">kelseybenedict26@gmail.com</p>
                                <h5 className="card-title">Phone:</h5>
                                <p className="card-text">(503) 990-2739</p>
                                <Link href="https://github.com/kelseybenedict">
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="github">
                                    <GitHubIcon />
                                </IconButton>
                                </Link>
                                <Link href="https://www.linkedin.com/in/kelsey-benedict-8396581a2/">
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="linkedin">
                                    <LinkedInIcon />
                                </IconButton></Link>
                                <Link href={Resume} target="_blank" download>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="resume">
                                    <DescriptionIcon />
                                </IconButton>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;