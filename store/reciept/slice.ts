import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface reciptType {
  CompanyName: string;
  productName: string;
  listName: string;
  Name: string;
  Price: number;
}
const initialState: reciptType[] = [];

const recieptSlice = createSlice({
  name: "recieptSlice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<reciptType>) => {
      state.push({
        CompanyName: action.payload.CompanyName,
        productName: action.payload.productName,
        listName: action.payload.listName,
        Name: action.payload.Name,
        Price: action.payload.Price,
      });
    },
  },
});

export default recieptSlice.reducer;
export const { add } = recieptSlice.actions;
