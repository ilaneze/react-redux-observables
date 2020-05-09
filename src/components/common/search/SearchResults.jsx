import React from 'react'
import { Grid, InputLabel } from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component'
import SearchResult from './SearchResult'
import Loader from '../Loader'

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
  results,
  page,
  pageSize,
  handleDetailsClick,
  handleLoadMore
}) => {
  const classes = useSearchResultsStyles()
  const hasMore = results.length >= (page + 1) * pageSize

  const onLoadMore = e => {
    if (handleLoadMore) {
      handleLoadMore(page + 1)
    }
  }

  return (
    <Grid className={classes.container} container>
      <InfiniteScroll
        next={onLoadMore}
        hasMore={hasMore}
        dataLength={results.length}
        loader={<Loader />}
      >
        <Grid className={classes.resultsContainer} container item>
          {label && (
            <Grid className={classes.resultsLabelContainer} item>
              <InputLabel className={classes.resultsLabelContainer}>
                {label}
              </InputLabel>
            </Grid>
          )}
          <Grid className={classes.results} item>
            {results &&
              results.length > 0 &&
              results.map((result, idx) => (
                <SearchResult
                  key={`result-${idx}`}
                  result={result}
                  handleDetailsClick={handleDetailsClick}
                />
              ))}
          </Grid>
        </Grid>
      </InfiniteScroll>
    </Grid>
  )
}

export default SearchResults
