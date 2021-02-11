import React from "react";
import { HashRouter } from "react-router-dom";

import useAuth from "hooks/useAuth";

import Loading from "components/Loading/Loading";
import Nav from "components/Nav/Nav";
import TransitionRouter from "Router/TransitionRouter";

const AppRouter = () => {
    // 현재 유저 정보
    const currentUser = useAuth();

    return (
        <HashRouter>
            <Loading />
            <Nav user={currentUser} />
            <TransitionRouter />
        </HashRouter>
    );
};

export default AppRouter;
