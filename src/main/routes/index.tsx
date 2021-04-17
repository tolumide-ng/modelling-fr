import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import "../assets/styles/_variables.css";
import "../assets/styles/_base.css";
import "../assets/styles/_fonts.css";
import "../assets/styles/_commons.css";
import store from "../store/index";

export const Routes = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppRouter />
            </Router>
        </Provider>
    );
};

export default Routes;
