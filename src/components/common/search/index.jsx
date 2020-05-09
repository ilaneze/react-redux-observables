import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import StyledInput from './SearchInput'
import SearchResults from './SearchResults'
import Loader from '../Loader'

const useSearchStyles = makeStyles(theme => ({
  container: {},
  searchContainer: {
    margin: theme.spacing(2)
  },
  resultsContainer: {}
}))

export default ({
  searchLabel,
  query,
  results = [],
  isLoading,
  handleSearchClick,
  handleDetailsClick,
  handleLoadMore,
  handleQueryChange
}) => {
  const classes = useSearchStyles()
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.searchContainer} container item>
        <StyledInput
          label={searchLabel}
          query={query}
          handleQueryChange={handleQueryChange}
          handleSearchClick={handleSearchClick}
        />
      </Grid>
      <Grid className={classes.resultsContainer} container item>
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <SearchResults
              results={results}
              handleDetailsClick={handleDetailsClick}
              handleLoadMore={handleLoadMore}
            />
          )}
        </>
      </Grid>
    </Grid>
  )
}
