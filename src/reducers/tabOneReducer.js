import Actions from '../actions'

const initialState = {
  isLoading: false,
  isSearchActive: false,
  query: '',
  queryData: [],
  queryMap: new Map(),
  options: {
    page: 1,
    pageSize: 20
  }
}

export default (state = initialState, action) => {
  const { query, queryMap } = state
  switch (action.type) {
    case Actions.TAB_ONE_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case Actions.TAB_ONE_DATA_RECEIVED:
      const { payload } = action
      if (!queryMap.has(query)) {
        queryMap.set(query, payload)
      }
      return {
        ...state,
        queryData: payload,
        queryMap,
        isLoading: false
      }
    case Actions.TAB_ONE_QUERY_CHANGE_REQUESTED:
      const exists = queryMap.has(action.query)
      const queryData = exists ? queryMap.get(action.query) : []
      return {
        ...state,
        query: action.query,
        isLoading: !exists && action.query,
        queryData
      }
    case Actions.TAB_ONE_LOAD_MORE_REQUESTED:
      return {
        ...state,
        page: state.page + 1
      }
    case Actions.TAB_ONE_LOAD_MORE_RECEIVED:
    default:
      return state
  }
}
