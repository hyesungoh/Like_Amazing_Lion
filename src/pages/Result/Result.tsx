import React, { useState, useEffect } from "react";

import { ResultProps } from "components/ResultConfig";
import { dbService } from "components/firebaseConfig";
import ResultTitle from "components/ResultTitle";
import ResultButton from "components/ResultButton";
import "pages/Result/Result.scss";

const grading = ({ quizzes, answers }: ResultProps) => {
    for (let i = 0; i < answers.length; i++) {
        if (quizzes?.[i].answer !== answers[i]) {
            return false;
        }
    }
    return true;
};

const Result = ({ quizzes, answers, isSubmit }: ResultProps) => {
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    useEffect(() => {
        setIsCorrect(grading({ quizzes, answers }));
    }, [isSubmit]);

    return (
        <div className={`result ${isSubmit ? "" : "result__hide"}`}>
            <div className="result__overlay"></div>
            <div className="result__box">
                <ResultTitle isCorrect={isCorrect} />
                <ResultButton isCorrect={isCorrect} />
            </div>
        </div>
    );
};

export default Result;