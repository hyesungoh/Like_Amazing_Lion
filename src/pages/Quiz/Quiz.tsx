import React, { useEffect } from "react";

import { getRandomQuiz } from "components/Quizs";
import "pages/Quiz/Quiz.scss";

const Quiz = () => {
    const GET_QUIZ_NUM: number = 3;
    useEffect(() => {
        const q = getRandomQuiz(GET_QUIZ_NUM);
        console.log(q);
    }, []);
    return (
        <div className="quiz">
        </div>
    );
};

export default Quiz;
