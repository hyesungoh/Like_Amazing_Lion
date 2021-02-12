import React, { useState, useEffect } from "react";
import { CheckCircleOutline, ErrorOutline } from "@material-ui/icons";

import useAuth from "hooks/useAuth";
import { saveCorrectUserEmail, grading } from "configs/ResultConfig";
import { ResultProps } from "types/Types";

import ResultTitle from "components/Result/ResultTitle";
import ResultButton from "components/Result/ResultButton";
import "pages/Result/Result.scss";

const Result = ({ quizzes, answers, isSubmit }: ResultProps) => {
    // 제출한 문제가 모두 정답인 지 확인하는 state
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const currentUser = useAuth();

    useEffect(() => {
        // graing 함수를 이용하여 제출한 문제가 모두 정답인 지 setStating
        setIsCorrect(grading({ quizzes, answers, currentUser }));
    }, [isSubmit]);

    // state를 prop으로 보내어 해당하는 결과를 보여줌
    return (
        <div className={`result ${isSubmit ? "" : "result__hide"}`}>
            <div className="result__overlay"></div>
            <div className="result__box">
                {isCorrect ? <CheckCircleOutline /> : <ErrorOutline />}

                <ResultTitle isCorrect={isCorrect} />
                <ResultButton isCorrect={isCorrect} />
            </div>
        </div>
    );
};

export default Result;
