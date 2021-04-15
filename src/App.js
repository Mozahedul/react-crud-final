import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home";
import CreateUser from "./components/createUser/CreateUser";
import ViewUser from "./components/viewUser/ViewUser";
import EditUser from "./components/editUser/EditUser";
import { useStateValue } from "./contextApi/stateProvider";

function App() {
  const [{ userCount }, dispatch] = useStateValue();

  useEffect(() => {
    const browserData = localStorage.getItem("userData");
    const data = JSON.parse(browserData);
    console.log(data);
    if (data) {
      data.map((item) =>
        dispatch({
          type: "ADD_USER",
          payload: item,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    const jsonData = JSON.stringify(userCount);
    localStorage.setItem("userData", jsonData);
  }, [userCount]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/edit/:id">
            <Header />
            <EditUser />
          </Route>
          <Route path="/create">
            <Header />
            <CreateUser />
          </Route>
          <Route path="/view">
            <Header />
            <ViewUser />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
