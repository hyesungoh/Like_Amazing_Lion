import React from "react";

import { QuizSelectInterface } from "components/QuizSelect";
import { QuizInterface } from "./Quizzes";

interface QuizLastSlidePros extends QuizSelectInterface {
    quizzes: QuizInterface[] | null;
}

const QuizLastSlide = ({ id, isCurrent, answer, quizzes }: QuizLastSlidePros) => {
    return (
        <div className={`quiz__select ${isCurrent && "quiz__select__showing"}`}>
            {quizzes?.map((quiz, index) => {
                return <div key={index}> 
                    <h1>{quiz.name}</h1>
                    <h1>{answer[index]? "참":"거짓"}</h1>
                </div>
            })}

            
        </div>
    );
};

export default QuizLastSlide;
