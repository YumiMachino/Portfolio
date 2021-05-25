import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import Chip from '@material-ui/core/Chip';

import Image from 'next/image'

const ProjectCard = (props) => {

/*setting props*/
const { title, thumbnail, languages, projectURL, app, description} = props;  /*setting for styling */
const useStyle = makeStyles({
    card: {
      backgroundColor:"#fff",
      marginLeft:'12px',
      marginRight:'12px',
      marginTop:'12px',
      marginBottom:'12px',
      textAlign: 'center',
    },
    media: {
      height: "300px",
      backgroundColor:"#fff",
      overflow: 'hidden',
      '&:hover': {
        transform: 'scale(1.1)',
        transitionDuration: '0.3s',
      },
    },
    button : {  
      '&:hover': {
        size: 'medium',
        fontWeight: 'bolder',
        transform: 'scale(1.1)',
        transitionDuration: '0.3s',
      },
    }

  });

const classes = useStyle();

const setColor = (app) => {
  if (app === "web") {
    return "primary"
  } else if (app === "mobile"){
    return "secondary"
  }
}

    return (  
         <Card className={classes.card} width="auto"> 
          <CardActionArea>
            <CardMedia 
              className={classes.media}
              component='img'
              src={thumbnail}
            />
            <CardContent>
               <Chip label={app}  color={setColor(app)} />
              <Typography gutterBottom variant="h5" component="h2" style={{marginTop: '10px'}}> 
                {title}
              </Typography>
              <Typography variant="body2" color="inherit" component="body2" style={{height: '10px'}}>
                {description}
              </Typography>

              <Typography variant="body1" color={setColor(app)} component="p" style={{marginTop: '10px'}}>
                {languages}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions style={{justifyContent: 'center'}}>
            <Button size="small" color={setColor(app)} href={projectURL} className={classes.button} variant='outlined'>
              Check this out
            </Button>
           </CardActions>
        </Card>
    );
}
 
export default ProjectCard;