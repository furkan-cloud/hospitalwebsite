import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Reviewtexts from "./Reviewtexts";
import { Link, useLocation, useParams } from "react-router-dom";
import "./style.css";
//import Dimensions from 'react-dimensions';

// address: "hospital address2"
// id: "2"
// image: "https://www.neuerkerode.de/fileadmin/_processed_/c/f/csm_DC42536_b9d7705da0.jpg"
// name: "marienstift"
// rating: 4
// ratingNumber: "78"
// reviews: (3) [{…}, {…}, {…}]

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    // height: Math.round(dimensions.width * 9 / 16), width: Dimensions.get('window').width

    width: 640,
    height: 360,
  },
});

export default function MediaCard() {
  const data = useLocation();
  console.log("data", data);
  const reviewData = data.state.reviews;
  const classes = useStyles();

  return (
    <div id="detail">
      <Card className={classes.root}>
        <CardActions>
          <Button size="small" color="primary">
            Klinify Score: {data.state.rating_klinify + 1}
          </Button>
          <Button size="small" color="primary">
            Google Maps Score: {data.state.rating_google}
          </Button>
          <Button size="small" color="primary">
            Klinikbewertungen Score: {data.state.rating_klinikum}
          </Button>
        </CardActions>

        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.state.image}
            title={data.state.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.state.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.state.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <h2>Reviews</h2>

      <div>
        {reviewData?.map((k) => (
          <Reviewtexts
            text={k.Deutsch}
            source={k.Von}
            rating={k.Sterne}
            date={k.Datum}
          />
        ))}
      </div>
    </div>
  );
}

// const Detail = () => {
//     return (
//         <div>
//             Detail Page
//         </div>
//     )
// }

// export default Detail;
