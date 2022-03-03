import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import musicinst from '../../imgs/musinst.png'


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: '350px',
        margin: '20px'
      }
  }))

function ItemListContainer ( {greeting} ){
    const classes = useStyles()
	return (
    <Card className={classes.card} >
      <CardMedia
        component="img"
        height="140"
        image = {musicinst}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {greeting}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ItemListContainer