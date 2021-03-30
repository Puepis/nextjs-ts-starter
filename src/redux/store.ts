import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { ApplicationState } from './reducer';
import rootSaga from './saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<ApplicationState> = (context: Context) => {
  // 1. Create saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2. Create store and apply middleware
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

// The wrapper around the redux store
export const wrapper = createWrapper<ApplicationState>(makeStore, {
  debug: true,
});
