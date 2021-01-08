import React, { useState, useEffect, useRef } from "react";

const Loading = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const Loader = useRef<any>();

    useEffect(() => {
        setInterval(() => {
            setIsLoading(true);
        }, 1500);

        setInterval(()=>{
            Loader.current.remove();
        }, 2350)
    }, []);

    return (
        
        <div ref={Loader} className={`loading ${isLoading ? "loading__end" : ""}`}>
            <div className="loading__circle"></div>
        </div>
    );
};

export default Loading;
