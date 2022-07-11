import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@slices/LoginSlice";
import createSagaMiddleware from "redux-saga";
import homePageReducer from "@slices/HomePageSlice";
import { rootLoginSagas } from "@pages/LoginPage/saga";
// import { rootHomeSagas } from "@pages/HomePage/saga";
import { all, fork } from "redux-saga/effects";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    login: loginReducer,
    module: homePageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
const rootSaga = function* rootSaga() {
  yield all([fork(() => rootLoginSagas())]);
};
// all là chạy tất cả các fork song song
sagaMiddleware.run(rootSaga);
