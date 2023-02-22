import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { charsReducer } from "../../features/got.characters/reducer/chars.reducer";

export const store = configureStore({
  reducer: {
    characters: charsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
