import React, { useState, Fragment } from "react";
import { Button, TextField } from "@material-ui/core";

import { authService } from "configs/firebaseConfig";
import CustomAlert from "components/Auth/CustomAlert";

const AuthForm = () => {
    // Email Value
    const [email, setEmail] = useState<string>("");
    // Password Value
    const [password, setPassword] = useState<string>("");
    // SignUp or SignIn check state
    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    // Error Message state
    const [errorMsg, setErrorMsg] = useState<string>("");

    // onChange to check there type
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

    const signUp = () =>
        authService.createUserWithEmailAndPassword(email, password);

    const signIn = () =>
        authService.signInWithEmailAndPassword(email, password);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // check state to decide SiginUp or SignIn
            await (isSignUp ? signUp() : signIn());
        } catch (error) {
            const { message } = error;
            setErrorMsg(message);
        }
    };

    // toggle isSignUp value
    const toggleIsSignUp = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <Fragment>
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

                <span className="form__span">
                    {isSignUp
                        ? "이미 가입을 하셨나요?"
                        : "이미 계정이 있으신가요?"}
                    <span onClick={toggleIsSignUp}>
                        {isSignUp ? "로그인 하기" : "회원가입 하기"}
                    </span>
                </span>
            </form>

            <CustomAlert msg={errorMsg} setMsg={setErrorMsg}></CustomAlert>
        </Fragment>
    );
};

export default AuthForm;
