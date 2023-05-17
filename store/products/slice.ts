import { createSlice } from "@reduxjs/toolkit";

export interface UserType {
    name: string;
}
const initialState: {
    login: "accepted" | "rejected" | "pending" | "onLogin";
    account: UserType;
} = {
    login: "accepted",
    account: {
        name: "مهدی نوری",
    },
};

const productsSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
});

export default productsSlice.reducer;
