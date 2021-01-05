import React from "react";
import { authService } from "components/firebaseConfig";

const Quiz = () => {
    const onClickSignOut = () => {
        authService.signOut();
    };

    return (
        <>
            <button onClick={onClickSignOut}>로그아웃</button>
        </>
    );
};

export default Quiz;
