import React from "react";
import { Routes, Route } from "react-router-dom";
import { layoutTypes } from "./constants/layout";

import {publicRoutes, authProtectedRoutes} from "./routes/allRoutes";

import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

import fakeBackend from "./helpers/AuthType/fakeBackend";
import AuthProtected from './routes/AuthProtected';
import { createSelector } from "reselect";

// Activating fake backend
fakeBackend();

const Index = () => {
    return (
        <React.Fragment>
        <Routes>
            <Route>
                {publicRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            <NonAuthLayout>
                                {route.component}
                            </NonAuthLayout>
                        }
                        key={idx}
                        exact={true}
                    />
                ))}
            </Route>

            <Route>
                {authProtectedRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            <AuthProtected>
                                <VerticalLayout>{route.component}</VerticalLayout>
                            </AuthProtected>
                        }
                        key={idx}
                        exact={true}
                    />
                ))}
            </Route>
        </Routes>
    </React.Fragment>
    );
  };

  export default Index;
