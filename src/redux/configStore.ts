import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import otherReducer from './reducers/otherReducer';

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: {
    otherReducer: otherReducer,
  },
  middleware,
});

// Run saga

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
