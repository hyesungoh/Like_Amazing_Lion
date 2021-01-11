import React, { useState, useEffect } from "react";

import { ResultElementProps } from "components/ResultConfig";

const ResultButton = ({ isCorrect }: ResultElementProps) => {
    useEffect(() => {
        // setStating dom ?
    }, []);
    return (
        <div className="result__button">
            <button>만든 사람 보기</button>
            <button>소스 보기</button>
            <button>재도전</button>
        </div>
    );
};

export default ResultButton;
