import React from 'react'
import {
  Grid,
  TextField,
  InputLabel,
  Card,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useEmptyResultStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const EmptyResult = () => {
  const classes = useEmptyResultStyles()

  return (
    <Grid className={classes.container} container>
      <Card>
        <Grid>
          <Typography>Nothing here..</Typography>
        </Grid>
      </Card>
    </Grid>
  )
}

export default EmptyResult
