import React, { useState, useEffect, useRef } from "react";
import { setTimeout } from "timers";

const Loading = () => {
    // loading 완료 상태를 확인 할 state
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // loading dom을 연결할 ref
    const Loader = useRef<any>();

    const LOADING_TIME: number = 1500;
    const ANIMATION_TIME: number = 850;

    useEffect(() => {
        // 정해진 시간 후 loading div의 class loading__end를 추가하기 위해
        setTimeout(() => {
            setIsLoading(true);
        }, LOADING_TIME);

        // Loading div의 fade out animation이 종류 후 삭제하기 위해
        setTimeout(() => {
            Loader.current.remove();
        }, LOADING_TIME + ANIMATION_TIME);
    }, []);

    return (
        <div
            ref={Loader}
            className={`loading ${isLoading ? "loading__end" : ""}`}
        >
            <div className="loading__circle"></div>
        </div>
    );
};

export default Loading;
