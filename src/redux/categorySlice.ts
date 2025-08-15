import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CategoryValue = "all" | "coffe" | "bakery";

const categorySlice = createSlice({
    name: "category",
    initialState: "coffe" as CategoryValue, //başlangıç değeri
    reducers: {
        setCategory: (_state, action: PayloadAction<CategoryValue>) => action.payload,
    },
})




export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;