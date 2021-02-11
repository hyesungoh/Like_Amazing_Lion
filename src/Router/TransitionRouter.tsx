import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Auth from "pages/Auth/Auth";
import Quiz from "pages/Quiz/Quiz";
import Waiting from "pages/Waiting/Waiting";
import About from "pages/About/About";

import useAuth from "hooks/useAuth";
import useCheckCorrectedUser from "hooks/useCheckCorrectedUser";

const TransitionRouter = withRouter(({ location }) => {
    const currentUser = useAuth();
    const isCorrectedUser = useCheckCorrectedUser(currentUser);

    return (
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
    );
});

export default TransitionRouter;
