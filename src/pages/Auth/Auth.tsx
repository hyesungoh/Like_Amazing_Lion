import React from "react";

import "pages/Auth/Auth.scss";
import bglogo from "assets/images/bglogo.png";

import AuthForm from "components/Auth/AuthForm";
import SocialAuth from "components/Auth/SocialAuth";

const Auth = () => {
    return (
        <div className="auth">
            <div className="background">
                <img
                    className="background__logo"
                    src={bglogo}
                    alt="bg_logo"
                ></img>
            </div>

            <div className="form">
                <AuthForm />
                <SocialAuth />
            </div>
        </div>
    );
};

export default Auth;
