import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
};

function MediaCard(props) {
  const { classes, picture } = props;
  return (
    <Card className={classes.card}>
     { picture && <CardMedia
        className={classes.media}
        image={picture.thumbnailUrl}
        title="Contemplative Reptile"
      />}
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {picture && picture.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);