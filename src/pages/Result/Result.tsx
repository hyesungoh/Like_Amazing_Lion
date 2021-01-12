import React, { useState, useEffect } from "react";
import { CheckCircleOutline, ErrorOutline } from "@material-ui/icons";

import useAuth from "hooks/useAuth";
import { ResultProps, saveCorrectUserEmail } from "components/ResultConfig";
import ResultTitle from "components/ResultTitle";
import ResultButton from "components/ResultButton";
import "pages/Result/Result.scss";

const grading = ({ quizzes, answers, currentUser }: ResultProps) => {
    for (let i = 0; i < answers.length; i++) {
        if (quizzes?.[i].answer !== answers[i]) {
            return false;
        }
    }
    saveCorrectUserEmail(currentUser);
    return true;
};

const Result = ({ quizzes, answers, isSubmit }: ResultProps) => {
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const currentUser = useAuth();

    useEffect(() => {
        setIsCorrect(grading({ quizzes, answers, currentUser }));
    }, [isSubmit]);

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
