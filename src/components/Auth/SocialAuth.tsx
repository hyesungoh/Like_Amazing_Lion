import React, { useState } from "react";
import { firebaseInstance, authService } from "configs/firebaseConfig";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGoogle,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import CustomAlert from "components/Auth/CustomAlert";

const SocialAuth = () => {
    // error message state
    const [errorMsg, setErrorMsg] = useState<string>("");

    // social sign in to decide there id
    const onClickSocial = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        // clicked dom
        const { parentNode } = event.target as HTMLButtonElement;
        // clicked dom's id
        const { id } = parentNode as HTMLButtonElement;

        let provider: any;
        try {
            if (id === "google") {
                provider = new firebaseInstance.auth.GoogleAuthProvider();
            } else if (id === "facebook") {
                provider = new firebaseInstance.auth.FacebookAuthProvider();
            } else if (id === "github") {
                provider = new firebaseInstance.auth.GithubAuthProvider();
            }

            await authService.signInWithPopup(provider);
        } catch ({ message }) {
            setErrorMsg(message);
        }
    };

    return (
        <div className="social">
            <Button
                onClick={onClickSocial}
                id="google"
                className="social__button"
            >
                <FontAwesomeIcon
                    icon={faGoogle}
                    size="4x"
                    className="social__icon"
                />
            </Button>
            <Button
                onClick={onClickSocial}
                id="facebook"
                className="social__button"
            >
                <FontAwesomeIcon
                    icon={faFacebook}
                    size="4x"
                    className="social__icon"
                />
            </Button>
            <Button
                onClick={onClickSocial}
                id="github"
                className="social__button"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    size="4x"
                    className="social__icon"
                />
            </Button>

            <CustomAlert msg={errorMsg} setMsg={setErrorMsg} />
        </div>
    );
};

export default SocialAuth;
