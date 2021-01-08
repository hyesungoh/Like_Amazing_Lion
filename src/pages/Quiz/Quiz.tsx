import React, { useState, useEffect } from "react";

import "pages/Quiz/Quiz.scss";
import QuizSelect from "components/QuizSelect";
import { getRandomQuiz, QuizInterface } from "components/Quizzes";

const Quiz = () => {
    const GET_QUIZ_NUM: number = 3;
    const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);

    const [answers, setAnswers] = useState([true, true, true]);

    useEffect(() => {
        const tempQuizzes: QuizInterface[] = getRandomQuiz(
            GET_QUIZ_NUM
        ) as QuizInterface[];
        setQuizzes(tempQuizzes);
    }, []);

    const onCheck = () => {
        console.log(answers);
    };

    return (
        <div className="quiz">
            {quizzes?.map((quiz: QuizInterface, index) => {
                return (
                    <QuizSelect
                        key={index}
                        id={index}
                        quiz={quiz}
                        answer={answers}
                        setAnswer={setAnswers}
                    />
                );
            })}

            <button onClick={onCheck}>CHECK</button>
        </div>
    );
};

export default Quiz;
