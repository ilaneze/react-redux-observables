import { of } from 'rxjs'
import { switchMap, filter, mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { getJSON } from '../utils/ajaxUtils'
import Actions from '../actions'

const URLS = {
  DATA: 'https://avo-ops.herokuapp.com/api/v1/products/search?query='
}

export const requestTabOneDataEpic = (action$, state$) =>
  action$.pipe(
    ofType(Actions.TAB_ONE_DATA_REQUESTED),
    filter(action => !state$.value.tabOneReducer.queryMap.has(action.query)),
    switchMap(action => {
      const queryUrl = `${URLS.DATA}${action.query}`
      console.log(`fetching data from ${queryUrl}`)
      return getJSON(queryUrl).pipe(
        mergeMap(response =>
          of(Actions.tabOneDataReceived([...response, ...response]))
        ),
        catchError(error => of(Actions.fetchRejected(error)))
      )
    })
  )
