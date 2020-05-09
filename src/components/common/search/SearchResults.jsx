import React from 'react'
import { Grid, InputLabel } from '@material-ui/core'
import SearchResult from './SearchResult'

import { makeStyles } from '@material-ui/core/styles'

const useSearchResultsStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    transition: 'all .2s'
  },
  resultsContainer: {
    maxWidth: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  results: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%'
    }
  },
  resultsLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const SearchResults = ({
  label,
  totalCount,
  pageResults,
  selected,
  page,
  pageSize,
  handleDetailsClick,
  handleLoadMore
}) => {
  const classes = useSearchResultsStyles()

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.resultsContainer} container item>
        {label && (
          <Grid className={classes.resultsLabelContainer} item>
            <InputLabel className={classes.resultsLabelContainer}>
              {label}
            </InputLabel>
          </Grid>
        )}
        <Grid className={classes.results} item>
          {pageResults &&
            pageResults.length > 0 &&
            pageResults.map((result, idx) => (
              <SearchResult
                key={`result-${idx}`}
                result={result}
                selected={selected.some(d => d === result.sku)}
                handleDetailsClick={handleDetailsClick}
              />
            ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchResults
