import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Auth from "pages/Auth/Auth";
import Quiz from "pages/Quiz";
import About from "pages/About";
import Nav from "components/Nav/Nav";
import useAuth from "hooks/useAuth";

const AppRouter = () => {
    const currentUser = useAuth();

    return (
        <HashRouter>
            <Nav user={currentUser} />
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
                <Route>
                    <About />
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default AppRouter;
