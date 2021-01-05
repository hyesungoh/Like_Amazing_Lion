import React, { useState } from "react";
import { firebaseInstance, authService } from "components/firebaseConfig";

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
        const { name } = event.target as HTMLButtonElement;

        let provider: any;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "facebook") {
            provider = new firebaseInstance.auth.FacebookAuthProvider();
        } else if (name === "github") {
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
                    <input
                        type="email"
                        value={email}
                        onChange={onChange}
                    ></input>
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

                <button onClick={onClickSocial} name="google">
                    구글로 로그인 하기
                </button>
                <button onClick={onClickSocial} name="facebook">
                    페이스북으로 로그인 하기
                </button>
                <button onClick={onClickSocial} name="github">
                    깃허브로 로그인 하기
                </button>
            </div>
        </>
    );
};

export default Auth;
