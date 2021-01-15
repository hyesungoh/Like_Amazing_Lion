import React from "react";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { authService } from "components/firebaseConfig";

interface NavProps {
    user: firebase.default.User | null;
}

const Nav = ({ user }: NavProps) => {
    const history = useHistory();

    const onClickSignOut = () => {
        authService.signOut();
        history.push("/");
    };

    return (
        <div className="nav">
            <Link to="/">
                <Button className="nav__logo">놀라운 사자처럼</Button>
            </Link>

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
        </div>
    );
};

export default Nav;
