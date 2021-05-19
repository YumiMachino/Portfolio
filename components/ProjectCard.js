import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';

import Image from 'next/image'

const ProjectCard = (props) => {

/*setting props*/
const { title, thumbnail, languages, projectURL} = props;  /*setting for styling */
const useStyle = makeStyles({
    card: {
      // backgroundColor: "#CDE1F8",
      backgroundColor:"#fff",
      marginLeft:20,
      marginRight:20,
      marginTop:10,
      marginBottom:10,
    },
    media: {
      height: "300px",
      backgroundColor:"#fff"
    }
  });

const classes = useStyle();


    return (  
         <Card className={classes.card} width="auto"> 
          <CardActionArea>
            <CardMedia 
              className={classes.media}
              component='img'
              // src="/vancouver.jpg"
              src={thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {languages}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions style={{justifyContent: 'center'}}>
            <Button size="small" color="primary" href={projectURL} variant='outlined'>
              Check this out
            </Button>
           </CardActions>
        </Card>
    );
}
 
export default ProjectCard;