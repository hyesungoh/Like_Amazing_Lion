import React, { useState, useEffect } from "react";

import { QuizProgressProps } from "types/Types";

const QuizProgress = ({
    maxQuizNum,
    currentQuizNum,
    setCurrentQuizNum,
}: QuizProgressProps) => {
    const [progresses, setProgresses] = useState<string[]>();
    const PROGRESS_CN: string = "progress__element";
    const SELECTED_PROGRESS_CN: string = " progress__selected";

    // currentQuizNum state가 바뀔 시 progress의 클래스 리스트를 설정
    useEffect(() => {
        // 모두 들어가는 클래스명을 추가하여 배열 생성
        const tempProgress: string[] = Array(maxQuizNum + 1).fill(PROGRESS_CN);

        // 반복문을 수행하며 현재 슬라이더에 맞게 클래스명을 추가
        for (let i = 0; i <= maxQuizNum; i++) {
            if (i === currentQuizNum) {
                tempProgress[i] += SELECTED_PROGRESS_CN;
            }
        }

        setProgresses(tempProgress);
    }, [maxQuizNum, currentQuizNum]);

    // 하단 progress 클릭 시 해당 id가 보여주는 slide로 넘어가기 위해
    // currenQuizNum을 setStating
    const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { id } = event.target as HTMLDivElement;
        setCurrentQuizNum(parseInt(id));
    };

    return (
        <div className="quiz__progress">
            <div className="progress__box">
                {progresses?.map((progress, index) => {
                    return (
                        <div
                            className={progress}
                            key={index}
                            id={`${index}`}
                            onClick={onClick}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizProgress;
