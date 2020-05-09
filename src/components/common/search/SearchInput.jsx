import React from 'react'
import styled from '@emotion/styled'
import { Grid, TextField, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useSearchInputStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: `${theme.spacing(5)}px 0`
  },
  searchInputLabelContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchLabel: {},
  searchInput: {
    cursor: 'pointer',
    width: '50%',
    height: '3rem',
    borderRadius: '50px',
    background: theme.palette.primary.main,
    padding: `0 0 0 ${theme.spacing(2)}px`,
    transition: 'all .3s',
    '& .MuiFocused': {},
    '&:hover': {},
    '&:focus': {},
    '&:active': {},
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  }
}))

const StyledInput = styled(TextField)`
  && {
    & .MuiInputBase-input {
      font-size: 30px;
    }
    & .MuiInput-underline:before,
    & .MuiInput-underline:after {
      border: unset !important;
    }
  }
`

const SearchInput = ({
  label,
  query,
  handleQueryChange,
  handleSearchClick
}) => {
  const classes = useSearchInputStyles()

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.searchContainer} container item>
        {label && (
          <Grid className={classes.searchInputLabelContainer} item>
            <InputLabel className={classes.searchInputLabelContainer}>
              {label}
            </InputLabel>
          </Grid>
        )}
        <Grid className={classes.searchInputContainer} item>
          <StyledInput
            className={classes.searchInput}
            placeholder="Type something that you like..."
            onClick={handleSearchClick}
            onKeyUp={handleQueryChange}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchInput
