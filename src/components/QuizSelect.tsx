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

export interface QuizSelectInterface {
    id: number;
    isCurrent: boolean;
    quiz?: QuizInterface;
    answer: boolean[];
    setAnswer?: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const QuizSelect = ({
    id,
    quiz,
    answer,
    setAnswer,
    isCurrent,
}: QuizSelectInterface) => {
    const [myAnswer, setMyAnswer] = useState<boolean>(true);

    const onChange = () => {
        answer[id] = !answer[id];
        setAnswer?.(answer);

        setMyAnswer(answer[id]);
    };

    return (
        <div className={`quiz__select ${isCurrent && "quiz__select__showing"}`}>
            <div className="select__button">
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
            </div>

            <QuizName name={quiz?.name as string} index={id}/>
        </div>
    );
};

export default QuizSelect;
