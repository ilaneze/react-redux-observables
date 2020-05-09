import Actions from '../actions'

const initialState = {
  isLoading: false,
  query: '',
  queryData: [],
  selected: [],
  queryMap: new Map(),
  page: 0,
  options: {
    pageSize: 10
  }
}

export default (state = initialState, action) => {
  const { query, queryMap, selected, page, options } = state
  const pageIdx = page * options.pageSize
  switch (action.type) {
    case Actions.TAB_ONE_EXPAND_RESULT_REQUESTED:
      console.log(`TAB_ONE_EXPAND_RESULT_REQUESTED`)
      const index = selected.findIndex(s => s === action.key)
      if (index === -1) {
        selected.push(action.key)
      } else {
        delete selected[index]
      }
      return {
        ...state,
        selected
      }
    case Actions.TAB_ONE_EXPAND_RESULT_RECEIVED:
      return state
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
        page: 0,
        queryTotalCount: payload.length,
        queryData: payload.filter((d, idx) => idx < pageIdx + options.pageSize),
        queryMap,
        isLoading: false
      }
    case Actions.TAB_ONE_QUERY_CHANGE_REQUESTED:
      const { query: actionQuery } = action
      const exists = queryMap.has(actionQuery)
      const queryData = exists
        ? queryMap
            .get(actionQuery)
            .filter((d, idx) => idx < pageIdx + options.pageSize)
        : []
      return {
        ...state,
        query: actionQuery,
        isLoading: !exists && actionQuery,
        queryData
      }
    case Actions.TAB_ONE_LOAD_MORE_REQUESTED:
      return {
        ...state,
        page: page + 1
      }
    case Actions.TAB_ONE_LOAD_MORE_RECEIVED:
    default:
      return state
  }
}
