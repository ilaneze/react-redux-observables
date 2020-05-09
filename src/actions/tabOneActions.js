// Action Types
const TAB_ONE_DATA_REQUESTED = 'TAB_ONE_DATA_REQUESTED'
const TAB_ONE_DATA_RECEIVED = 'TAB_ONE_DATA_RECEIVED'
const TAB_ONE_LOAD_MORE_REQUESTED = 'TAB_ONE_LOAD_MORE_REQUESTED'
const TAB_ONE_LOAD_MORE_RECEIVED = 'TAB_ONE_LOAD_MORE_RECEIVED'
const TAB_ONE_QUERY_CHANGE_REQUESTED = 'TAB_ONE_QUERY_CHANGE_REQUESTED'
const TAB_ONE_QUERY_CHANGE_RECEIVED = 'TAB_ONE_QUERY_CHANGE_RECEIVED'
const TAB_ONE_LOADING_REF_CHANGE_REQUESTED =
  'TAB_ONE_LOADING_REF_CHANGE_REQUESTED'
const TAB_ONE_LOADING_REF_CHANGE_RECEIVED =
  'TAB_ONE_LOADING_REF_CHANGE_RECEIVED'
const TAB_ONE_EXPAND_RESULT_REQUESTED = 'TAB_ONE_EXPAND_RESULT_REQUESTED'
const TAB_ONE_EXPAND_RESULT_RECEIVED = 'TAB_ONE_EXPAND_RESULT_RECEIVED'

// Action Creators
const requestToggleResultDetails = ({ sku }) => ({
  type: TAB_ONE_EXPAND_RESULT_REQUESTED,
  key: sku
})

const toggleResultDetailsReceived = () => ({
  type: TAB_ONE_EXPAND_RESULT_RECEIVED
})

const requestTabOneData = query => ({
  type: TAB_ONE_DATA_REQUESTED,
  query
})

const tabOneDataReceived = payload => ({
  type: TAB_ONE_DATA_RECEIVED,
  payload
})

const requestQueryChange = query => ({
  type: TAB_ONE_QUERY_CHANGE_REQUESTED,
  query
})

const tabOneQueryChangeReceived = payload => ({
  type: TAB_ONE_QUERY_CHANGE_RECEIVED,
  payload
})

const requestLoadingRefChange = ref => ({
  type: TAB_ONE_LOADING_REF_CHANGE_REQUESTED,
  ref
})

const loadingRefChangeReceived = () => ({
  type: TAB_ONE_LOADING_REF_CHANGE_RECEIVED
})

const requestTabOneLoadMore = page => ({
  type: TAB_ONE_LOAD_MORE_REQUESTED,
  page
})

const tabOneLoadMoreReceived = payload => ({
  type: TAB_ONE_LOAD_MORE_RECEIVED,
  payload
})

export default {
  TAB_ONE_DATA_REQUESTED,
  TAB_ONE_DATA_RECEIVED,
  TAB_ONE_LOAD_MORE_REQUESTED,
  TAB_ONE_LOAD_MORE_RECEIVED,
  TAB_ONE_QUERY_CHANGE_REQUESTED,
  TAB_ONE_QUERY_CHANGE_RECEIVED,
  TAB_ONE_LOADING_REF_CHANGE_REQUESTED,
  TAB_ONE_LOADING_REF_CHANGE_RECEIVED,
  TAB_ONE_EXPAND_RESULT_REQUESTED,
  TAB_ONE_EXPAND_RESULT_RECEIVED,
  requestToggleResultDetails,
  toggleResultDetailsReceived,
  requestLoadingRefChange,
  loadingRefChangeReceived,
  requestTabOneData,
  tabOneDataReceived,
  requestTabOneLoadMore,
  tabOneLoadMoreReceived,
  requestQueryChange,
  tabOneQueryChangeReceived
}
