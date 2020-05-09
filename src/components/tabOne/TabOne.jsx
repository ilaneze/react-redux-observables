import React, { useCallback, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash/debounce'
import Search from '../common/search'
import Actions from '../../actions'

const ContentWrapper = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
`

const TabOne = () => {
  const dispatch = useDispatch()

  const {
    query,
    queryTotalCount,
    queryData,
    selected,
    isLoading,
    page,
    options: { pageSize }
  } = useSelector(state => state.tabOneReducer)

  const hasMore = queryTotalCount >= (page + 1) * pageSize

  const handleDetailsClick = useCallback(
    result => {
      dispatch(Actions.requestToggleResultDetails(result))
    },
    [dispatch]
  )

  const handleQueryChange = useCallback(
    e => {
      const newQuery = e.target.value
      if (query === newQuery) return
      const debouncedQueryChange = debounce(() => {
        dispatch(Actions.requestQueryChange(newQuery))
      }, 500)
      debouncedQueryChange()
    },
    [dispatch, query]
  )

  const handleLoadMore = useCallback(
    e => {
      if (hasMore) {
        dispatch(Actions.requestTabOneLoadMore(page))
      }
      debugger
    },
    [dispatch, hasMore, page]
  )

  useEffect(() => {
    if (!query || query.length < 3) return
    dispatch(Actions.requestTabOneData(query))
  }, [dispatch, query])

  return (
    <ContentWrapper>
      <Search
        query={query}
        totalCount={queryTotalCount}
        page={page}
        pageSize={pageSize}
        results={queryData}
        selected={selected}
        isLoading={isLoading}
        handleQueryChange={handleQueryChange}
        handleDetailsClick={handleDetailsClick}
        handleLoadMore={handleLoadMore}
      />
    </ContentWrapper>
  )
}

export default TabOne
