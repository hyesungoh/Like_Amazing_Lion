import React, { useRef, useEffect } from "react";

import { IconButton } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

import { QuizSliderProps } from "types/Types";

const QuizSlider = ({
    setCurrentQuiz,
    maxQuizNum,
    currentQuizNum,
}: QuizSliderProps) => {
    const leftButton = useRef<any>(null);
    const rightButton = useRef<any>(null);

    // 현재 보여지는 Quiz 번호를 기준으로 좌측, 우측 버튼의 보여짐을 classList를 사용하여 설정
    useEffect(() => {
        leftButton.current.classList.remove("slider__hide");
        rightButton.current.classList.remove("slider__hide");

        // classList를 수정해야 할 Button을 할당 후 수정
        let modifingButton: React.MutableRefObject<any> | null = null;
        if (currentQuizNum === 0) {
            modifingButton = leftButton;
        } else if (currentQuizNum === maxQuizNum) {
            modifingButton = rightButton;
        }
        modifingButton?.current.classList.add("slider__hide");
    }, [currentQuizNum]);

    // 현재 슬라이드를 기준으로 onClick 기능을 예외처리
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
