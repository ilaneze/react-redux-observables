import React from 'react'
import { Grid, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'

const useSearchResultStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'unset',
    transition: 'all .25s',
    margin: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px 0`,
    borderRadius: '25px',
    // border: props => (props.selected ? '1px solid red' : ''),
    [theme.breakpoints.down('sm')]: {
      // width: '100%'
    },
    '&:hover': {
      boxShadow: '0px 8px 18px 5px rgba(55, 87, 145, 0.149)'
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
      width: '5vw'
    }
  },
  imageContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    // height: '15vh',
    [theme.breakpoints.down('sm')]: {
      // height: '25vh'
    }
  },
  image: {
    display: 'flex',
    height: '20vh',
    borderRadius: '50%',
    transition: 'all .25s',
    [theme.breakpoints.down('sm')]: {
      height: '25vh'
    }
  },
  content: {
    display: 'flex',
    width: '100%',
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
    minHeight: '10vh',
    transition: 'all .25s',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    margin: `${theme.spacing(2)}px 0 0`,
    [theme.breakpoints.down('sm')]: {
      minHeight: '15vh'
    }
  },
  openDetailsLabel: {
    cursor: 'pointer',
    transition: 'opacity .25s',
    visibility: props => (props.selected ? 'hidden' : 'visible'),
    display: props => (props.selected ? 'none' : 'flex'),
    opacity: props => (props.selected ? 0 : 1),
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  detailsInfoContainer: {
    transition: 'opacity .25s',
    opacity: props => (props.selected ? 1 : 0),
    visibility: props => (props.selected ? 'visible' : 'hidden'),
    display: props => (props.selected ? 'flex' : 'none'),
    '& p': {
      margin: `0 ${theme.spacing(1)}px 0 0`
    }
  },
  closeDetailsLabel: {
    cursor: 'pointer',
    transition: 'opacity .25s',
    opacity: props => (props.selected ? 1 : 0),
    visibility: props => (props.selected ? 'visible' : 'hidden'),
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  detailsLabel: {
    color: theme.palette.primary.main
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

const SearchResult = ({ result, selected, handleDetailsClick }) => {
  const { sku, name, category, price, image_url: img } = result
  const classes = useSearchResultStyles({ selected })

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.result} container item>
        <Grid className={classes.imageContainer}>
          <img className={classes.image} src={img} alt={name} />
        </Grid>
        <Grid className={classes.content} item>
          <Grid className={classes.descriptionContainer} container item>
            <Typography className={classes.categoryLabel} variant='overline'>
              {category}
            </Typography>
            <Typography className={classes.name}>{name}</Typography>
          </Grid>
          <Grid className={classes.detailsContainer} container item>
            <Divider className={classes.divider} />
            <Typography
              className={classes.openDetailsLabel}
              variant='overline'
              onClick={e => handleDetailsClick(result)}
            >
              Details
            </Typography>
            <Close
              className={classes.closeDetailsLabel}
              onClick={e => handleDetailsClick(result)}
            />
            <Grid className={classes.detailsInfoContainer} container>
              <Grid container item>
                <Typography className={classes.detailsLabel}>SKU:</Typography>
                <Typography>{sku}</Typography>
              </Grid>
              <Grid container item>
                <Typography className={classes.detailsLabel}>Price:</Typography>
                <Typography>{price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchResult
