import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../actions'
import Search from '../common/search'
import debounce from 'lodash/debounce'

const TabOne = () => {
  const dispatch = useDispatch()
  const {
    query,
    queryData,
    isSearchActive,
    isLoading,
    options: { page, pageSize }
  } = useSelector(state => state.tabOneReducer)

  const handleDetailsClick = result => {}

  const handleQueryChange = e => {
    const newQuery = e.target.value
    if (query === newQuery) return
    const debouncedFunc = debounce(() => {
      dispatch(Actions.requestQueryChange(newQuery))
    }, 500)
    debouncedFunc()
  }

  useEffect(() => {
    if (!query || query.length < 3) return
    dispatch(Actions.requestTabOneData(query))
  }, [dispatch, query])

  return (
    <div>
      <Search
        query={query}
        results={queryData}
        isLoading={isLoading}
        isSearchActive={isSearchActive}
        handleQueryChange={handleQueryChange}
        handleDetailsClick={handleDetailsClick}
        handleLoadMore={e => {
          dispatch(Actions.requestTabOneLoadMore())
        }}
      />
    </div>
  )
}

export default TabOne
