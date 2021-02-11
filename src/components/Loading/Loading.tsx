import React, { useState, useEffect, useRef } from "react";
import { setTimeout } from "timers";

const Loading = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const Loader = useRef<any>();
    const LOADING_TIME: number = 1500;
    const ANIMATION_TIME: number = 850;

    useEffect(() => {
        // 정해진 시간 후 loading div의 
        setTimeout(() => {
            setIsLoading(true);
        }, LOADING_TIME);

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
