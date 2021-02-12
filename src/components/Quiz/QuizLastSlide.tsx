import React from "react";
import { Button } from "@material-ui/core";

import QuizName from "components/Quiz/QuizName";
import { QuizLastSlidePros } from "types/Types";

const QuizLastSlide = ({
    isCurrent,
    answer,
    quizzes,
    setCurrentQuiz,
    setIsSubmit,
}: QuizLastSlidePros) => {
    // Quiz Component의 isSubmit state를 true로 하여 modal이 나오게
    const onSubmit = () => {
        setIsSubmit(true);
    };

    return (
        <div className={`quiz__select ${isCurrent && "quiz__select__showing"}`}>
            {quizzes?.map((quiz, index) => (
                // 모든 퀴즈들을 보여줌
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
