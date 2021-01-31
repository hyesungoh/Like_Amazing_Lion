import React, { useState, useEffect } from "react";

interface QuizProgressProps {
    maxQuizNum: number;
    currentQuizNum: number;
    setCurrentQuizNum: React.Dispatch<React.SetStateAction<number>>;
}

const QuizProgress = ({
    maxQuizNum,
    currentQuizNum,
    setCurrentQuizNum,
}: QuizProgressProps) => {
    const [progresses, setProgresses] = useState<string[]>();

    useEffect(() => {
        const tempProgress: string[] = [];
        for (let i = 0; i <= maxQuizNum; i++) {
            const tempElement = `progress__element ${
                i === currentQuizNum && "progress__selected"
            }`;
            tempProgress.push(tempElement);
        }
        setProgresses(tempProgress);
    }, [maxQuizNum, currentQuizNum]);

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
