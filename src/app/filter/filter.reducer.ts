import {filterActions, SET_FILTER, validFilters} from './filter.actions';

const initialState: validFilters = 'all';

export function filterReducer(state = initialState, action: filterActions) {

  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
