import React from "react";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Loading from "components/Loading";
import Auth from "pages/Auth/Auth";
import Quiz from "pages/Quiz/Quiz";
import About from "pages/About/About";
import Nav from "components/Nav";
import useAuth from "hooks/useAuth";

const AppRouter = () => {
    const currentUser = useAuth();

    const TransitionRouter = withRouter(({ location }) => (
        <TransitionGroup className="app">
            <CSSTransition
                key={location.pathname}
                classNames="slide"
                timeout={800}
            >
                <Switch location={location}>
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
            </CSSTransition>
        </TransitionGroup>
    ));

    return (
        <HashRouter>
            <Loading />
            <Nav user={currentUser} />
            <TransitionRouter />
        </HashRouter>
    );
};

export default AppRouter;
