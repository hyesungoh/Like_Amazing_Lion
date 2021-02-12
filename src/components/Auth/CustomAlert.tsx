import React, { useEffect, useState } from "react";
import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { TransitionProps } from "@material-ui/core/transitions";

import { CustomAlertProps } from "types/Types";

const CustomAlert = ({ msg, setMsg }: CustomAlertProps) => {
    // 경고창의 열려있음과 transition을 관리하는 state
    const [state, setState] = useState<{
        open: boolean;
        Transition: React.ComponentType<
            TransitionProps & { children?: React.ReactElement<any, any> }
        >;
    }>({
        open: false,
        Transition: Slide,
    });

    // 알람의 위치 값
    const vertical: any = "bottom";
    const horizontal: any = "right";

    // Prop으로 넘어온 에러 메세지가 빈 문자열이 아닐 시
    useEffect(() => {
        setState({
            ...state,
            open: msg !== "",
        });
    }, [msg]);

    // 닫기 버튼을 누를 시
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
