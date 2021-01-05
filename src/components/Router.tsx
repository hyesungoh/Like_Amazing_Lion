import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { authService } from "components/firebaseConfig";

import Auth from "pages/Auth";
import Quiz from "pages/Quiz";
import useAuth from "hooks/useAuth";

const AppRouter = () => {
    const currentUser = useAuth();
    
    return (
        <HashRouter>
            <Switch>
                {currentUser === null ? (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                ) : (
                    <Route exact path="/">
                        <Quiz />
                    </Route>
                )}
            </Switch>
        </HashRouter>
    );
};

export default AppRouter;
