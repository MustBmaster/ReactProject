import { saveUser, logIn, logOut, isAuth } from "@slices/LoginSlice";
import { authGet } from "@pages/ApiInterceptors";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
export function* profile() {
  const token = localStorage.getItem("ex1-auth-token");
  if (token) {
    const res = yield call(
      authGet,
      "https://21-ex1-api.dev.3si.vn/auth/user/profile"
    );
    if (res && res.data.statusCode === 200) {
      yield put(isAuth());
      yield put(saveUser(res.data.data));
    } else {
      yield put(logOut());
    }
  }
}
function* checkAuthenticated() {
  yield fork(() => profile());
}
export function* rootLoginSagas() {
  yield all([fork(() => checkAuthenticated()), takeLatest(logIn, profile)]);
}
