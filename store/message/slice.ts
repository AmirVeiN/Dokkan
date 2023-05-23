import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface MessageType {
  id: number;
  date: string;
  delete: boolean;
  subject: string;
  message: string;
}
const initialState: MessageType[] = [
  {
    id: 1,
    date: "1402/03/02",
    delete: false,
    subject: "آپدیت نرم افزار",
    message:
      "ورژن جدیدی از اپ دکان عرضه شد , حتما برای بهبود کارایی , برنامه را آپدیت نمایید",
  },
  {
    id: 2,
    date: "1402/03/01",
    delete: false,
    subject: "سفارش شما آماده شد",
    message:
      "سفارش شما آماده ارسال میباشد و در 24 ساعت اینده به دست شما خواهد رسید درصورت هرگونه مغایرت با تیم پشتیبانی تماس بگیرید",
  },
  {
    id: 3,
    date: "1402/02/29",
    delete: false,
    subject: "ثبت سفارش",
    message: "کاربر گرامی سفارش شما ثبت و وارد مرحله بازبینی و بررسی اولیه شد",
  },
];

const messageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {
    changeDelete: (state, action: PayloadAction<number>) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export default messageSlice.reducer;
export const { changeDelete } = messageSlice.actions;
