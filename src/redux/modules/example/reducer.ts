import { actionTypes } from './actions';
import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'redux';

export interface ExampleState {
  count: number;
  error: boolean;
  placeholderData: any;
}
const initialState = {
  count: 0,
  error: false,
  placeholderData: null,
};

const reducer: Reducer<ExampleState> = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    default:
      return state;
  }
};

export default reducer;
