import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import "./App.css";
import { login } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("storage", () => {
      dispatch(login("storage"));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/loginPage">
            <LoginPage />
          </Route>
          <Route path="/registerPage">
            <RegisterPage />
          </Route>
        </Switch>
        <Route path="/details/:id">
          <MovieDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
