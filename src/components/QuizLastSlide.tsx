import React from "react";
import { Button } from "@material-ui/core";

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

    const onSubmit = () => {
        console.table(quizzes);
        console.table(answer);
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

            <Button onClick={onSubmit} className="select__submit" color="primary">결과 제출하기</Button>
        </div>
    );
};

export default QuizLastSlide;
