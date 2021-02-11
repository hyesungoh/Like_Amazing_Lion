import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { NavInterface } from "types/Types";

import NavElement from "components/Nav/NavElement";

const Nav = ({ user }: NavInterface) => {
    return (
        <div className="nav">
            {/* left element of Nav */}
            <Link to="/">
                <Button className="nav__logo">놀라운 사자처럼</Button>
            </Link>

            {/* right element of Nav */}
            <NavElement user={user} />
        </div>
    );
};

export default Nav;
