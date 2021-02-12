import React from "react";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { authService } from "configs/firebaseConfig";

import { NavInterface } from "types/Types";

const NavElement = ({ user }: NavInterface) => {
    const history = useHistory();

    // 로그아웃
    const onClickSignOut = () => {
        // firebase signOut
        authService.signOut();
        // react router dom push url to home
        history.push("/");
    };

    return (
        <div className="nav__elements">
            <Link to="/about">
                <Button className="nav__element">만든 사람</Button>
            </Link>
            {user && (
                <Button className="nav__element" onClick={onClickSignOut}>
                    로그아웃
                </Button>
            )}
        </div>
    );
};

export default NavElement;
