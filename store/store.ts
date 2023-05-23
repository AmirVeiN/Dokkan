import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import message from "./message/slice";
import company from "./compony/slice";

export const store = configureStore({
  reducer: {
    message,
    company,
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
