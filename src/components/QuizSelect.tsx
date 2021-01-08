import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import {
    Clear,
    ClearOutlined,
    PanoramaFishEye,
    PanoramaFishEyeOutlined,
} from "@material-ui/icons";

import QuizName from "components/QuizName";
import { QuizInterface } from "components/Quizzes";

const QuizSelect = ({ name, answer }: QuizInterface) => {
    const [myAnswer, setMyAnswer] = useState<boolean>(true);

    const onChange = () => {
        setMyAnswer(!myAnswer);
    };

    return (
        <div className="quiz__select">
            <Checkbox
                onChange={onChange}
                checked={!myAnswer}
                className="quiz__no"
                icon={<ClearOutlined />}
                checkedIcon={<Clear />}
            />

            <Checkbox
                onChange={onChange}
                checked={myAnswer}
                className="quiz__yes"
                icon={<PanoramaFishEyeOutlined />}
                checkedIcon={<PanoramaFishEye />}
            />

            <QuizName name={name} />
        </div>
    );
};

export default QuizSelect;
