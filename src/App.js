import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./Components/Screens/Login/login";
import Registration from "./Components/Screens/Registration/registration";


function App() {
  return (
    <BrowserRouter basename="Kassiezona">
      
         <Switch>
            <Route path="/" component={Registration} exact />
            <Route path="/login" component={Login} />
         </Switch>

    </BrowserRouter>
  );
}

export default App;
