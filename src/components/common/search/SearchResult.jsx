import React from 'react'
import { Grid, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EmptyResult from './EmptyResult'

const useSearchResultStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'unset',
    transition: 'all .3s',
    margin: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px 0`,
    boxShadow: '0px 8px 18px 5px rgba(55, 87, 145, 0.149)',
    [theme.breakpoints.down('sm')]: {
      // width: '100%'
    }
  },
  result: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '20vw',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: `0 0 ${theme.spacing(4)}px`
    }
  },
  divider: {
    backgroundColor: theme.palette.primary.contrastText,
    width: '1vw',
    margin: `${theme.spacing(3)}px 0 0`,
    [theme.breakpoints.down('sm')]: {
      width: '2vw'
    }
  },
  imageContainer: {
    // height: '15vh',
    [theme.breakpoints.down('sm')]: {
      // height: '25vh'
    }
  },
  image: {
    display: 'flex',
    height: '20vh',
    borderRadius: '50%',
    transition: 'all .3s',
    [theme.breakpoints.down('sm')]: {
      height: '25vh'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '0.6rem',
    padding: `${theme.spacing(1)}px`
  },
  categoryLabel: {
    fontSize: '0.7rem',
    color: theme.palette.primary.main
  },
  name: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    }
  },
  descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: `${theme.spacing(2)}px 0 0`,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  resultLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultFieldContainer: {
    display: 'flex',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`
  }
}))

const SearchResult = ({ result, handleDetailsClick }) => {
  const classes = useSearchResultStyles()

  if (!result) {
    return <EmptyResult />
  }
  const { name, category, image_url: img } = result
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.result} container item>
        <Grid className={classes.imageContainer}>
          <img className={classes.image} src={img} alt={name} />
        </Grid>
        <Grid className={classes.content} item>
          <Grid className={classes.descriptionContainer} container item>
            <Typography className={classes.categoryLabel} variant="overline">
              {category}
            </Typography>
            <Typography className={classes.name}>{name}</Typography>
          </Grid>
          <Grid className={classes.detailsContainer} container item>
            <Divider className={classes.divider} />
            <Typography
              className={classes.name}
              variant="overline"
              onClick={e => handleDetailsClick(result)}
            >
              Details
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchResult
