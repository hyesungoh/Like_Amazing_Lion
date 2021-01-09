import React, { useState, useEffect } from "react";

import "pages/Result/Result.scss";
import { QuizInterface } from "components/Quizzes";

interface ResultProps {
    quizzes: QuizInterface[] | null;
    answers: boolean[];
    isSubmit?: boolean;
}

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

        console.table(quizzes);
        console.table(answers);
        console.log(isSubmit);
    }, [isSubmit]);

    return (
        <div className={`result ${isSubmit ? "" : "result__hide"}`}>
            {isCorrect ? "맞음" : "틀림"}
        </div>
    );
};

export default Result;
