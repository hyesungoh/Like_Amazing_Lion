import React, { useState } from "react";
import { firebaseInstance, authService } from "components/firebaseConfig";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

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
            <div className="background"></div>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <Input
                        id="standard-basic"
                        type="email"
                        value={email}
                        onChange={onChange}
                    ></Input>
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
        </>
    );
};

export default Auth;
