import { Reducer } from 'redux';
import { ActionType, createAction, getType } from 'typesafe-actions';

export const actions = {
  toggle: createAction('TOGGLE'),
};

export type ExampleState = {
  toggledOn: boolean;
};

const initialState: ExampleState = {
  toggledOn: false,
};

const reducer: Reducer<ExampleState, ActionType<typeof actions>> = (
  state = initialState,
  action,
): ExampleState => {
  switch (action.type) {
    case getType(actions.toggle):
      return { ...state, toggledOn: !state.toggledOn };
    default:
      return state;
  }
};

export default reducer;
