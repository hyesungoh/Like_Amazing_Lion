import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from "@material-ui/core";
import {
    Clear,
    ClearOutlined,
    PanoramaFishEye,
    PanoramaFishEyeOutlined,
} from "@material-ui/icons";

import { getRandomQuiz } from "components/Quizs";
import "pages/Quiz/Quiz.scss";

const Quiz = () => {
    const GET_QUIZ_NUM: number = 3;
    const [answer, setAnswer] = useState<boolean>(true);

    useEffect(() => {
        const q = getRandomQuiz(GET_QUIZ_NUM);
    }, []);

    const onChange = () => {
        setAnswer(!answer);
    };

    return (
        <div className="quiz">
            <Checkbox
                onChange={onChange}
                checked={!answer}
                className="quiz__no"
                icon={<ClearOutlined />}
                checkedIcon={<Clear />}
                color="secondary"
            />

            <Checkbox
                onChange={onChange}
                checked={answer}
                className="quiz__yes"
                icon={<PanoramaFishEyeOutlined />}
                checkedIcon={<PanoramaFishEye />}
            />
        </div>
    );
};

export default Quiz;
