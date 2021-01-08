import React from "react";

interface QuizSliderProps {
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    maxQuizNum: number;
    currentQuizNum: number;
}

const QuizSlider = ({
    setCurrentQuiz,
    maxQuizNum,
    currentQuizNum,
}: QuizSliderProps) => {
    const onClickLeft = () => {
        if (currentQuizNum > 0) {
            setCurrentQuiz((prev) => prev - 1);
        }
    };

    const onClickRight = () => {
        if (currentQuizNum < maxQuizNum) {
            setCurrentQuiz((prev) => prev + 1);
        }
    };

    return (
        <div className="quiz__slider">
            <button onClick={onClickLeft}>left</button>
            <button onClick={onClickRight}>right</button>
        </div>
    );
};

export default QuizSlider;
