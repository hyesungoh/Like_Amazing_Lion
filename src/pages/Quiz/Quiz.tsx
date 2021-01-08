import React, { useState, useEffect } from "react";

import "pages/Quiz/Quiz.scss";
import QuizSelect from "components/QuizSelect";
import QuizSlider from "components/QuizSlider";
import QuizLastSlide from "components/QuizLastSlide";
import { getRandomQuiz, QuizInterface } from "components/Quizzes";

const Quiz = () => {
    const GET_QUIZ_NUM: number = 3;
    const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);
    const [answers, setAnswers] = useState([true, true, true]);
    const [currentQuiz, setCurrentQuiz] = useState<number>(0);

    useEffect(() => {
        const tempQuizzes: QuizInterface[] = getRandomQuiz(
            GET_QUIZ_NUM
        ) as QuizInterface[];
        setQuizzes(tempQuizzes);
    }, []);

    return (
        <div className="quiz">
            <div className="quiz__box">
                {quizzes?.map((quiz: QuizInterface, index) => {
                    return (
                        <QuizSelect
                            key={index}
                            id={index}
                            isCurrent={index === currentQuiz}
                            quiz={quiz}
                            answer={answers}
                            setAnswer={setAnswers}
                        />
                    );
                })}

                <QuizLastSlide
                    id={GET_QUIZ_NUM}
                    isCurrent={currentQuiz === GET_QUIZ_NUM}
                    answer={answers}
                    quizzes={quizzes}
                />

                <QuizSlider
                    setCurrentQuiz={setCurrentQuiz}
                    maxQuizNum={GET_QUIZ_NUM}
                    currentQuizNum={currentQuiz}
                />
            </div>
        </div>
    );
};

export default Quiz;
