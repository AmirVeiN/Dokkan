import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import product from "./products/slice";
import company from "./compony/slice";

export const store = configureStore({
  reducer: {
    product,
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
