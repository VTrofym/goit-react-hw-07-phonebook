import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReduser";

const persistedReducer = rootReducer

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});

