// import { authGet } from "@pages/ApiInterceptors";
// import { call, put, all, fork, takeLatest } from "redux-saga/effects";
// import { getModules } from "@slices/HomePageSlice";
// import { logOut } from "@slices/LoginSlice";
// export function* module() {
//   const token = localStorage.getItem("ex1-auth-token");
//   if (token) {
//     const res = yield call(
//       authGet,
//       "https://21-ex1-api.dev.3si.vn/auth/module"
//     );
//     if (res && res.data && res.data.statusCode === 200) {
//       yield put(getModules(res.data.data));
//     } else {
//       console.log("chạy vào lỗi");
//       yield put(logOut());
//     }
//   }
// }

// export function* rootHomeSagas() {
//   yield all(takeLatest(getModules, module));
// }
