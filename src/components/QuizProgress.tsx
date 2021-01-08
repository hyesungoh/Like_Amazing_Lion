import React, { useState, useEffect } from "react";

interface QuizProgressProps {
    maxQuizNum: number;
    currentQuizNum: number;
}

const QuizProgress = ({ maxQuizNum, currentQuizNum }: QuizProgressProps) => {
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

    return (
        <div className="quiz__progress">
            <div className="progress__box">
                {progresses?.map((progress, index) => {
                    return <div className={progress} key={index}></div>
                })}
            </div>
        </div>
    );
    
};

export default QuizProgress;