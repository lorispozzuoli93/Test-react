import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { inputSliceName } from './inputSliceName'
import { inputSliceEmail } from './inputSliceEmail';

const combinedReducers = combineReducers({
  inputValueName: inputSliceName.reducer,
  inputValueEmail: inputSliceEmail.reducer,
});

export const store = configureStore({
  reducer: (state, action) => combinedReducers(state, action)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch