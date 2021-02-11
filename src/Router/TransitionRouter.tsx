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
                        // 로그인 안했을 시
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    ) : isCorrectedUser ? (
                        // 정답을 맞춘 유저일 시
                        <Route exact path="/">
                            <Waiting />
                        </Route>
                    ) : (
                        // 정답을 맞추기 전인 유저일 시
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
