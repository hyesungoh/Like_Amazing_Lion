import React, { useState, useEffect } from "react";

import "pages/Quiz/Quiz.scss";
import QuizSelect from "components/QuizSelect";
import { getRandomQuiz, QuizInterface } from "components/Quizzes";

const Quiz = () => {
    const GET_QUIZ_NUM: number = 3;
    const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);

    useEffect(() => {
        const tempQuizzes: QuizInterface[] = getRandomQuiz(
            GET_QUIZ_NUM
        ) as QuizInterface[];
        setQuizzes(tempQuizzes);
    }, []);

    return (
        <div className="quiz">
            {quizzes?.map((quiz: QuizInterface, index) => {
                return <QuizSelect key={index} name={quiz.name} answer={quiz.answer} />;
            })}
        </div>
    );
};

export default Quiz;
