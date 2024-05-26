// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore);
