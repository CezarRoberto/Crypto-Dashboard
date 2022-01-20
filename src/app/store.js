import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../service/cryptoapi";
import { cryptoNewsApi } from "../service/cryptonewsapi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
