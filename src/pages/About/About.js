import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Furkan from "../../assets/images/furkan.jpg";
import Mehmet from "../../assets/images/mehmet.jpeg";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: "12vw",
    height: "12vw",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div id="about">
      <h2>About Us</h2>
      <div className={classes.root}>
        <div class="item">
          <Avatar className={classes.large} alt="Furkan" src={Furkan} />
          <span class="caption">Furkan</span>
        </div>
        <div class="item">
          <Avatar className={classes.large} alt="Mehmet" src={Mehmet} />
          <span class="caption">Mehmet</span>
        </div>
      </div>
      <h2>Klinify Project</h2>

      <h3>Goal </h3>
      <p>
        Within the scope of the Klinify project, it was aimed to re-evaluate the
        rating and reviews of some hospitals in Niedersachsen with our own
        algorithms. In this context, the relevant data were scraped from the
        internet, machine learning methods were used, and the new data obtained
        by re-evaluation of the data was presented on a web page. The relevant
        data are taken from maps.google.com and Klinikbewertungen.de.
      </p>
      <h3>Method and Technology </h3>
      <p>
        During the project, <b>scrum methodology and philosophy</b> were
        applied, and daily review, sprint review, sprint retro-respective
        meetings were held. <b>Git, Github, Jira and Scrum</b> were used in
        project management.
      </p>
      <p>
        A <b> web scraping </b>method has been used to obtain the data. This
        data was taken with Selenium and BeautifulSoup via Google Chrome Web
        Driver. The obtained data was cleaned using Python, Jupyter notebook,
        Numpy and Pandas libraries, and converted to JSON format for inserting
        to the database.
      </p>
      <p>
        As <b> machine learning </b>sentiment analysis and clustering are used.
        In order to analyze comments in German better, the collected data were
        analyzed by using the textblob library. In order to obtain a
        project-specific hospital score (Klinify Score), scores obtained from
        different sources were clustered by including the number of comments.
        Appropriate calculations were made on the new data obtained, and the
        data was brought to the latest state to be presented on the web
        application and converted into the relevant data format.
      </p>
      <p>
        With Google <b>Firebase technology as a backend</b>, the data was stored
        in the cloud (Cloud Firestore). <b>For frontend used React,</b> the
        JavaScript library. This application has been deployed as Github Pages.
      </p>
      <h3>Result</h3>
      <p>
        The project has reached its goals and has been published as a web
        application. With this project, users were able to compare the scores
        obtained from patient comments about hospitals in the state of
        Niedersachsen.
      </p>
    </div>
  );
};

export default About;
