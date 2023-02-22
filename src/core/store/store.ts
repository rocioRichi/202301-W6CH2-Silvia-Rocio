import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {
    chars: charsReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
///importar el reducer
