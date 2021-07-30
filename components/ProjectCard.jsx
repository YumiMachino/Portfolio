import { makeStyles } from "@material-ui/core";
import { sizing } from "@material-ui/system";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
} from "@material-ui/core";

const ProjectCard = (props) => {
  /*
setting props
*/

  const { title, thumbnail, languages, projectURL, app, description } = props;

  /*setting for styling */

  const font = "Raleway, sans-serif";

  const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: "#fff",
      marginLeft: "12px",
      marginRight: "12px",
      marginTop: "12px",
      marginBottom: "12px",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "8vw",
        marginRight: "8vw",
        marginTop: "2vh",
        marginBottom: "2vh",
      },
    },
    media: {
      height: "300px",
      backgroundColor: "#fff",
      overflow: "hidden",
      "&:hover": {
        transform: "scale(1.1)",
        transitionDuration: "0.3s",
      },
      [theme.breakpoints.down("sm")]: {
        height: "150px",
      },
    },
    button: {
      fontFamily: font,
      "&:hover": {
        size: "medium",
        fontWeight: "bolder",
        transform: "scale(1.1)",
        transitionDuration: "0.4s",
        [theme.breakpoints.down("sm")]: {
          size: "small",
        },
      },
    },
    titleStyle: {
      fontFamily: font,
      marginTop: "10px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "2px",
        fontSize: "18px",
      },
    },
    fontStyle: {
      fontFamily: font,
    },
  }));

  const classes = useStyles();

  const setColor = (app) => {
    if (app === "web") {
      return "primary";
    } else if (app === "mobile") {
      return "secondary";
    }
  };

  return (
    <Card className={classes.card} width="auto">
      <CardActionArea>
        <CardMedia className={classes.media} component="img" src={thumbnail} />
        <CardContent>
          <Chip
            label={app}
            color={setColor(app)}
            size="small"
            className={classes.fontStyle}
          />
          <Typography gutterBottom variant="h6" className={classes.titleStyle}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="inherit"
            component="body2"
            className={classes.fontStyle}
          >
            {description}
          </Typography>
          <Typography
            variant="body1"
            color={setColor(app)}
            component="p"
            className={classes.fontStyle}
          >
            {languages}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions style={{ justifyContent: "center" }}>
        <Button
          size="small"
          color={setColor(app)}
          href={projectURL}
          className={classes.button}
          variant="contained"
        >
          Check it out
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
