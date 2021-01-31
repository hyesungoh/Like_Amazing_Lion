import React, { useRef, useEffect } from "react";

import { IconButton } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

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
    const leftButton = useRef<any>(null);
    const rightButton = useRef<any>(null);

    useEffect(() => {
        leftButton.current.classList.remove("slider__hide");
        rightButton.current.classList.remove("slider__hide");

        if (currentQuizNum === 0) {
            leftButton.current.classList.add("slider__hide");
        } else if (currentQuizNum === maxQuizNum) {
            rightButton.current.classList.add("slider__hide");
        }
    }, [currentQuizNum]);

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
            <IconButton
                ref={leftButton}
                onClick={onClickLeft}
                className={"slider__btn slider__hide"}
                color="primary"
                aria-label="left"
                component="span"
            >
                <KeyboardArrowLeft />
            </IconButton>

            <IconButton
                ref={rightButton}
                onClick={onClickRight}
                className="slider__btn"
                color="primary"
                aria-label="right"
                component="span"
            >
                <KeyboardArrowRight />
            </IconButton>
        </div>
    );
};

export default QuizSlider;
