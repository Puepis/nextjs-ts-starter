import { combineReducers } from 'redux';
import exampleReducer, { ExampleState } from './modules/example/reducer';

// The top-level state object
export interface ApplicationState {
  example: ExampleState;
}

// Combine child reducers into single reducer
export default combineReducers<ApplicationState>({
  example: exampleReducer,
});
