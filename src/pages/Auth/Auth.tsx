import React, { useState } from "react";
import { firebaseInstance, authService } from "components/firebaseConfig";

import { Button, TextField, createMuiTheme, ThemeProvider } from "@material-ui/core";

import "images/"
import "pages/Auth/Auth.scss";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#c0392b",
            main: "#F79E1C",
            dark: "#141310",
            contrastText: "#c0392b",
        },
    },
});

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
        <ThemeProvider theme={theme}>
            <div className="background">
                <img className="background__logo" src="" alt="bg_logo"></img>
                <img
                    src="https://likelion.net/assets/home/slide/02-background-be82ae1605d3b8d909373f516e7aa593da9ab78ded7efd9177f94977d916b1c6.png"
                    alt="bg"
                />
            </div>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Standard"
                        type="email"
                        value={email}
                        onChange={onChange}
                        className="form__input"
                    ></TextField>

                    <input
                        type="password"
                        value={password}
                        onChange={onChange}
                    ></input>
                    <input
                        type="submit"
                        value={isSignUp ? "회원가입" : "로그인"}
                    ></input>
                </form>

                <span>{errorMsg}</span>
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
            </div>
        </ThemeProvider>
    );
};

export default Auth;
