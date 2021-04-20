import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
    block:{
        float: 'right',
        width: '20ch'
    }
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <div id="contact">
            <h1>Contact Us</h1>
            <p>Please fill in the contact form below</p>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField required id="outlined-required" label="Required" defaultValue="Name" variant="outlined" /><br></br>
                <TextField required id="outlined-required" label="Required" defaultValue="Email" variant="outlined" /><br></br>
                <TextField id="outlined-search" label="Subject" type="search" variant="outlined" /><br></br>
                <TextField id="outlined-multiline-static" label="Your message" multiline rows={4} defaultValue="" variant="outlined"/><br></br>
                <Button className={classes.block} variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    );
}

export default Contact;
