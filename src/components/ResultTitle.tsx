import React, { useState, useEffect } from "react";

import { ResultElementProps } from "components/ResultConfig";

const ResultTitle = ({ isCorrect }: ResultElementProps) => {
    const [header, setHeader] = useState<string>("");
    const [info, setInfo] = useState<string>("");

    useEffect(() => {
        const tempHeader = isCorrect ? "맞음" : "틀림";
        setHeader(tempHeader);

        const tempInfo = isCorrect
            ? "축하합니다 이벤트 당첨자는 어쩌구 저쩌구"
            : "다시 한번 도전해보세용ㅋ";
        setInfo(tempInfo);
    }, [isCorrect]);

    return (
        <div className="result__title">
            <span className="title__header">{header}</span>
            <span className="title__info">{info}</span>
        </div>
    );
};

export default ResultTitle;
