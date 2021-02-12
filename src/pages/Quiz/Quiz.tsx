import React, { useState, useEffect } from "react";

import "pages/Quiz/Quiz.scss";
import { QuizInterface } from "types/Types";

import QuizSelect from "components/Quiz/QuizSelect";
import QuizSlider from "components/Quiz/QuizSlider";
import QuizLastSlide from "components/Quiz/QuizLastSlide";
import { getRandomQuiz } from "configs/QuizzeConfig";
import QuizProgress from "components/Quiz/QuizProgress";
import Result from "pages/Result/Result";

const Quiz = () => {
    const GET_QUIZ_NUM: number = 3;
    // 퀴즈들
    const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);
    // 내가 선택한 정답들
    const [answers, setAnswers] = useState([true, true, true]);
    // 현재 퀴즈 슬라이드 번호
    const [currentQuiz, setCurrentQuiz] = useState<number>(0);
    // 문제 제출 확인
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    // ComponentMount 시 정해진 수 만큼 랜덤으로 문제를 받아옴
    useEffect(() => {
        const tempQuizzes: QuizInterface[] = getRandomQuiz(
            GET_QUIZ_NUM
        ) as QuizInterface[];
        setQuizzes(tempQuizzes);
    }, []);

    return (
        <div className="quiz">
            {/* 가운데 있는 퀴즈 정보, 마지막 슬라이드, 슬라이드 버튼 */}
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
                    isCurrent={currentQuiz === GET_QUIZ_NUM}
                    answer={answers}
                    quizzes={quizzes}
                    setCurrentQuiz={setCurrentQuiz}
                    setIsSubmit={setIsSubmit}
                />

                <QuizSlider
                    setCurrentQuiz={setCurrentQuiz}
                    maxQuizNum={GET_QUIZ_NUM}
                    currentQuizNum={currentQuiz}
                />
            </div>

            {/* 하단에 위치한 현재 슬라이드 번호 */}
            <QuizProgress
                maxQuizNum={GET_QUIZ_NUM}
                currentQuizNum={currentQuiz}
                setCurrentQuizNum={setCurrentQuiz}
            />

            {/* 결과 제출 시 나오는 modal */}
            <Result quizzes={quizzes} answers={answers} isSubmit={isSubmit} />
        </div>
    );
};

export default Quiz;
