import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


const Reviewtexts = (props) => {
    const data = useLocation();
    const classes = useStyles();
    return (
        <div>
            <List className={classes.root}>

                
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={props.text[1]} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<div>{props.source}<Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly size="small" /></div>}
                        secondary={
                            <React.Fragment>
                                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                    {props.date}
                                </Typography>
                                {props.text}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                
            </List>
        </div>
    )
}

export default Reviewtexts;
