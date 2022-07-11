import HomePage from "@pages/HomePage/HomePage";
import LoginPage from "@pages/LoginPage/LoginPage";
import TestPage from "@pages/TestPage/TestPage";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import DeFaultFrameSet from "./components/DefaultFrameSet";
import Mod1 from "@pages/TestPage/Mod1";
import Mod2 from "@pages/TestPage/Mod2";
import Mod3 from "@pages/TestPage/Mod3";
import Mod4 from "@pages/TestPage/Mod4";

function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}
function App() {
  const module = useSelector((state) => state.module.module);
  const isAuthenticated = useSelector((state) => state.login.isAuth);
  // const user = useSelector((state) => state.login.user);
  // console.log(user.username, user.phoneNumber, user.unitName);
  // console.log(isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      <Navigate to="/login" />;
    }
  }, [isAuthenticated]);
  return (
    <Routes>
      <Route
        path="*"
        element={
          isAuthenticated ? (
            <Navigate to="/home-page" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/home-page" /> : <LoginPage />}
      />
      <Route
        path="/home-page"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/test-page"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <TestPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/module-1"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            {/* <Route
              path="*"
              element={
                <DeFaultFrameSet module={module}>
                  <Mod2 />
                </DeFaultFrameSet>
              }
            />
            <Route
              path="/option-2"
              element={
                <DeFaultFrameSet module={module}>
                  <Mod3 />
                </DeFaultFrameSet>
              }
            />
            <Route
              path="/team-1"
              element={
                <DeFaultFrameSet module={module}>
                  <Mod3 />
                </DeFaultFrameSet>
              }
            />
            <Route
              path="/team-2"
              element={
                <DeFaultFrameSet module={module}>
                  <Mod4 />
                </DeFaultFrameSet>
              }
            /> */}
          </PrivateRoute>
        }
      />
      <Route
        path="/module-2"
        // element={<DeFaultFrameSet module={module}></DeFaultFrameSet>}
      >
        <Route
          path=""
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DeFaultFrameSet module={module}>
                <Mod2 />
              </DeFaultFrameSet>
            </PrivateRoute>
          }
        />
        <Route
          path="option-2"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DeFaultFrameSet module={module}>
                <Mod3 />
              </DeFaultFrameSet>
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/tien-ich-chung"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <DeFaultFrameSet module={module}>
              <Mod4 />
            </DeFaultFrameSet>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
