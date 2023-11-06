import primoReducers from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const lavoro = configureStore({
  reducer: primoReducers,
});

export default lavoro;
