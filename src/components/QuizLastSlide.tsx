import React, { useState } from "react";
import { Button } from "@material-ui/core";

import QuizName from "components/QuizName";
import { QuizSelectInterface } from "components/QuizSelect";
import { QuizInterface } from "components/Quizzes";

interface QuizLastSlidePros extends QuizSelectInterface {
    quizzes: QuizInterface[] | null;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizLastSlide = ({
    id,
    isCurrent,
    answer,
    quizzes,
    setCurrentQuiz,
    setIsSubmit,
}: QuizLastSlidePros) => {
    const onSubmit = () => {
        setIsSubmit(true);
    };

    return (
        <div className={`quiz__select ${isCurrent && "quiz__select__showing"}`}>
            {quizzes?.map((quiz, index) => (
                <QuizName
                    key={index}
                    index={index}
                    submitAnswer={true}
                    name={`${quiz.name}`}
                    submitValue={answer[index]}
                    setCurrentQuiz={setCurrentQuiz}
                />
            ))}

            <Button
                onClick={onSubmit}
                className="select__submit"
                color="primary"
            >
                결과 확인하기
            </Button>
        </div>
    );
};

export default QuizLastSlide;
