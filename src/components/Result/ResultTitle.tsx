import React, { useState, useEffect } from "react";

import { ResultElementProps } from "types/Types";

const ResultTitle = ({ isCorrect }: ResultElementProps) => {
    const [header, setHeader] = useState<string>("");
    const [info, setInfo] = useState<string>("");

    const CORRECT_HEADER_MSG = "정답입니다 !";
    const CORRECT_INFO_MSG =
        "이벤트 당첨자에게는 3월 2일 회원가입에 사용하셨던 이메일을 통해 연락드리겠습니다 !";
    const WRONG_HEADER_MSG = "아쉽지만 틀렸습니다";
    const WRONG_INFO_MSG = "하단 버튼을 이용해 다시 도전 해보세요 !!";

    // 정답, 오답을 구분하여 문자열을 state에 할당하여 보여주기 위함
    useEffect(() => {
        const tempHeader = isCorrect ? CORRECT_HEADER_MSG : WRONG_HEADER_MSG;
        setHeader(tempHeader);

        const tempInfo = isCorrect ? CORRECT_INFO_MSG : WRONG_INFO_MSG;
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
