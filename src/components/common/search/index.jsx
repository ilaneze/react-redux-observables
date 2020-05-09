import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import Loader from '../Loader'

const useSearchStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    transition: 'transform .25s',
    transform: ({ defaultView }) =>
      defaultView ? `translate(0, calc(50vh - 128px))` : `translate(0, 0)`
  },
  searchContainer: {
    justifyContent: ({ defaultView }) => (defaultView ? 'center' : ''),
    alignItems: ({ defaultView }) => (defaultView ? 'center' : ''),
    margin: ({ defaultView }) => (defaultView ? `${theme.spacing(2)}px 0` : '')
  },
  resultsContainer: {},
  filtersContainer: {
    flexDirection: 'row',
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px ${theme.spacing(
      5
    )}px`,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      left: 'unset',
      padding: 'unset',
      textAlign: 'center',
      justifyContent: 'center'
    }
  },
  searchInfoContainer: {
    flexDirection: 'column'
  }
}))

export default ({
  searchLabel,
  query,
  totalCount = 0,
  page = 1,
  pageSize = 10,
  results = [],
  selected = [],
  isLoading,
  handleSearchClick,
  handleDetailsClick,
  handleLoadMore,
  handleQueryChange
}) => {
  const classes = useSearchStyles({ defaultView: !query || query.length < 3 })
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.searchContainer} container item>
        <SearchInput
          label={searchLabel}
          query={query}
          handleQueryChange={handleQueryChange}
          handleSearchClick={handleSearchClick}
        />
      </Grid>
      <Grid className={classes.filtersContainer} container item>
        <Grid className={classes.searchInfoContainer} container item>
          {query && query.length && query.length > 2 && (
            <>
              <Typography>Showing results for "{query}"</Typography>
              <Typography>
                Displaying '{results.length}' out of '{totalCount}' results
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
      <Grid className={classes.resultsContainer} container item>
        <Loader isLoading={isLoading} />
        <SearchResults
          totalCount={totalCount}
          pageResults={results}
          selected={selected}
          pageSize={pageSize}
          page={page}
          handleDetailsClick={handleDetailsClick}
          handleLoadMore={handleLoadMore}
        />
      </Grid>
    </Grid>
  )
}
