import { configureStore } from "@reduxjs/toolkit";

import articleSlice from "./article-slice";

const store = configureStore({
  reducer: {
    articles: articleSlice,
  },
});

export default store;