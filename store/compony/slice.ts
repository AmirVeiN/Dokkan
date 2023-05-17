import { createSlice } from "@reduxjs/toolkit";

export interface CompanyType {
  CompanyName: string;
  productName: string;
  listName: string;
  Name: string;
  Price: number;
}
const initialState: CompanyType[] = [
  {
    CompanyName: "شرکت آرتا سبلان",
    productName: "ironTools",
    listName: "tirAhan",
    Name: "تیر آهن",
    Price: 192000,
  },
  {
    CompanyName: "شرکت سبلان آذر",
    productName: "tools",
    listName: "achar",
    Name: "آچار",
    Price: 192000,
  },
  {
    CompanyName: "شرکت آرتا سبلان",
    productName: "tools",
    listName: "chakkosh",
    Name: "چکش",
    Price: 109000,
  },
  {
    CompanyName: "شرکت ورامین گستر",
    productName: "ironTools",
    listName: "milgerd",
    Name: "میلگرد",
    Price: 292000,
  },
  {
    CompanyName: "شرکت ورامین گستر",
    productName: "tools",
    listName: "achar",
    Name: "آچار",
    Price: 169000,
  },
  {
    CompanyName: "شرکت طوس آب",
    productName: "tools",
    listName: "chakkosh",
    Name: "چکش",
    Price: 159000,
  },
  {
    CompanyName: "شرکت طوس آب",
    productName: "machinery",
    listName: "chamanzan",
    Name: "ماشین چمن زنی",
    Price: 119000,
  },
  {
    CompanyName: "شرکت طوس آب",
    productName: "buildingMaterials",
    listName: "siman",
    Name: "سیمان",
    Price: 199000,
  },
];

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
