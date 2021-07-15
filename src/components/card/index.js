import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';
import {Link, useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  cardInfo:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingnumber:{
    marginLeft: '5px'
  },
  root: {
    maxWidth: 345,
    width: "31%",
    height: "30%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#5DC7CB',
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  
  const history = useHistory();
  

  return (
    
    <Card onClick={()=>{history.push({
      pathname: "/detail/" + props.id,
      state: props.data
    })}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name[0]}
          </Avatar>
        }
        title={props.name}
        subheader={<div className={classes.cardInfo}><Rating name="half-rating-read" defaultValue={props.rating+1} precision={0.5} readOnly size="small" /><p className={classes.ratingnumber}>{props.rating+1.0}</p></div>}

       

      />
      <CardMedia
        className={classes.media}
        image={props.image}
       
        title={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.address}
        </Typography>
      </CardContent>

    </Card>
  );
}