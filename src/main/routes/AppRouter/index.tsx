import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import ErrorBoundary from "@pages/ErrorBoundary";
import { HomePage } from "@pages/Home";
import { LoadingPage } from "@pages/LoadingPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { setDropDownAction } from "@store/modules/dropDown/actions";
import { RootState } from "@store/modules/types";
import "./index.css";

const AppRouter = withRouter(() => {
    const dispatch = useDispatch();

    const dropDownSelector = useSelector(
        (state: RootState) => state.dropDownReducer
    );

    const handleCloseDropDown = () => {
        if (dropDownSelector.display) {
            dispatch(setDropDownAction(true));
        }
    };

    return (
        <div className="appwide" onClick={handleCloseDropDown}>
            <main className="appwide-container">
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            <Route path="/" exact>
                                <HomePage />
                            </Route>
                            <Route path="*">
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
});

export default AppRouter;
