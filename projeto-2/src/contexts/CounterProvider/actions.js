import * as types from './types';

export const incrementCounter = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};

export const descrementCounter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};
