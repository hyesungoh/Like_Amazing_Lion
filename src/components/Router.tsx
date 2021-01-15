import React from "react";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import useAuth from "hooks/useAuth";
import useCheckCorrectedUser from "hooks/useCheckCorrectedUser";

import Loading from "components/Loading";
import Auth from "pages/Auth/Auth";
import Quiz from "pages/Quiz/Quiz";
import Waiting from "pages/Waiting/Waiting";
import About from "pages/About/About";
import Nav from "components/Nav";

const AppRouter = () => {
    const currentUser = useAuth();
    const isCorrectedUser = useCheckCorrectedUser(currentUser);

    const TransitionRouter = withRouter(({ location }) => (
        <TransitionGroup className="app">
            <CSSTransition
                key={location.pathname}
                classNames="slide"
                timeout={1500}
            >
                <Switch location={location}>
                    {currentUser === null ? (
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    ) : isCorrectedUser ? (
                        <Route exact path="/">
                            <Waiting />
                        </Route>
                    ) : (
                        <Route exact path="/">
                            <Quiz />
                        </Route>
                    )}
                    <Route path="/about">
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
