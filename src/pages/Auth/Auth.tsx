import React, { useState } from "react";
import { firebaseInstance, authService } from "components/firebaseConfig";
import { Button, TextField } from "@material-ui/core";

import "pages/Auth/Auth.scss";
import bglogo from "images/bglogo.png";
import CustomAlert from "components/CustomAlert";

const Auth = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { type, value },
        } = event;

        if (type === "email") {
            setEmail(value);
        } else if (type === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (isSignUp) {
                await authService.createUserWithEmailAndPassword(
                    email,
                    password
                );
            } else {
                await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            const { message } = error;
            setErrorMsg(message);
        }
    };

    const onClickSocial = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const { parentNode } = event.target as HTMLButtonElement;
        const { id } = parentNode as HTMLButtonElement;

        let provider: any;
        if (id === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (id === "facebook") {
            provider = new firebaseInstance.auth.FacebookAuthProvider();
        } else if (id === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        await authService.signInWithPopup(provider);
    };

    const toggleIsSignUp = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <>
            <div className="background">
                <img
                    className="background__logo"
                    src={bglogo}
                    alt="bg_logo"
                ></img>
            </div>
            <div className="form">
                <form className="form__form" onSubmit={onSubmit}>
                    <TextField
                        id="standard-basic"
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={onChange}
                        className="form__input"
                    ></TextField>

                    <TextField
                        id="standard-basic"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={onChange}
                        className="form__input"
                    ></TextField>

                    <Button type="submit" className="form__submit">
                        {isSignUp ? "회원가입" : "로그인"}
                    </Button>
                </form>

                <button onClick={toggleIsSignUp}>
                    {isSignUp ? "로그인 하기" : "회원가입 하기"}
                </button>

                <Button onClick={onClickSocial} id="google">
                    구글로 로그인 하기
                </Button>
                <Button onClick={onClickSocial} id="facebook">
                    페이스북으로 로그인 하기
                </Button>
                <Button onClick={onClickSocial} id="github" color="primary">
                    깃허브로 로그인 하기
                </Button>

                <CustomAlert msg={errorMsg} setMsg={setErrorMsg}></CustomAlert>
            </div>
        </>
    );
};

export default Auth;
