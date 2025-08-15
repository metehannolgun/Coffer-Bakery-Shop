import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./Api";
import categoryReducer from "./categorySlice";



export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        //category slice yapıcaz buraya
        category: categoryReducer,

        

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

