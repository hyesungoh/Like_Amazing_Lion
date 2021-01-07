import React, { useState, useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import {
    Clear,
    ClearOutlined,
    PanoramaFishEye,
    PanoramaFishEyeOutlined,
} from "@material-ui/icons";

import { getRandomQuiz, QuizInterface } from "components/Quizzes";
import "pages/Quiz/Quiz.scss";
import QuizName from "components/QuizName";

const Quiz = () => {
    const GET_QUIZ_NUM: number = 3;
    const [answer, setAnswer] = useState<boolean>(true);
    const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);
    const [correctNum, setCorrectNum] = useState<number>(0);

    useEffect(() => {
        const tempQuizzes: QuizInterface[] = getRandomQuiz(
            GET_QUIZ_NUM
        ) as QuizInterface[];
        setQuizzes(tempQuizzes);
    }, []);

    const onChange = () => {
        setAnswer(!answer);
        // console.log(quizzes?.[0]);
    };

    return (
        <div className="quiz">
            <div className="quiz__select">
                <Checkbox
                    onChange={onChange}
                    checked={!answer}
                    className="quiz__no"
                    icon={<ClearOutlined />}
                    checkedIcon={<Clear />}
                />

                <Checkbox
                    onChange={onChange}
                    checked={answer}
                    className="quiz__yes"
                    icon={<PanoramaFishEyeOutlined />}
                    checkedIcon={<PanoramaFishEye />}
                />
            </div>

            <QuizName name={quizzes?.[correctNum].name} />
        </div>
    );
};

export default Quiz;
