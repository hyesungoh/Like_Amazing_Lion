import React from "react";

import QuizName from "components/QuizName";
import { QuizSelectInterface } from "components/QuizSelect";
import { QuizInterface } from "./Quizzes";

interface QuizLastSlidePros extends QuizSelectInterface {
    quizzes: QuizInterface[] | null;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
}

const QuizLastSlide = ({
    id,
    isCurrent,
    answer,
    quizzes,
    setCurrentQuiz,
}: QuizLastSlidePros) => {
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
        </div>
    );
};

export default QuizLastSlide;
