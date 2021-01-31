import React, { useEffect, useState } from "react";
import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { TransitionProps } from "@material-ui/core/transitions";

interface CustomAlertProps {
    msg: string;
    setMsg: React.Dispatch<React.SetStateAction<string>>;
}

const CustomAlert = ({ msg, setMsg }: CustomAlertProps) => {
    const [state, setState] = React.useState<{
        open: boolean;
        Transition: React.ComponentType<
            TransitionProps & { children?: React.ReactElement<any, any> }
        >;
    }>({
        open: false,
        Transition: Slide,
    });

    const vertical: any = "bottom";
    const horizontal: any = "right";

    useEffect(() => {
        setState({
            ...state,
            open: msg !== "",
        });
    }, [msg]);

    const onClose = () => {
        setState({
            ...state,
            open: false,
        });

        setMsg("");
    };

    return (
        <Snackbar
            open={state.open}
            onClose={onClose}
            TransitionComponent={state.Transition}
            key={state.Transition.name}
            anchorOrigin={{ vertical, horizontal }}
        >
            <Alert onClose={onClose} severity="warning">
                {msg}
            </Alert>
        </Snackbar>
    );
};

export default CustomAlert;
