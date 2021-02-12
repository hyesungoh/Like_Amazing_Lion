import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import {
    Clear,
    ClearOutlined,
    PanoramaFishEye,
    PanoramaFishEyeOutlined,
} from "@material-ui/icons";

import QuizName from "components/Quiz/QuizName";
import { QuizSelectInterface } from "types/Types";

const QuizSelect = ({
    id,
    quiz,
    answer,
    setAnswer,
    isCurrent,
}: QuizSelectInterface) => {
    const [myAnswer, setMyAnswer] = useState<boolean>(true);

    // Prop으로 받어오는 answer은 정답들이 모여있는 배열
    // 체크 박스를 클릭 시 현재 선택한 것과 반대의 정보를 해당 answer state의 setStating
    // myAnswer state는 현재 component의 값을 수정하기 위함
    const onChange = () => {
        if (id || id === 0) {
            answer[id] = !answer[id];
            setAnswer?.(answer);
            setMyAnswer(answer[id]);
        }
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

            <QuizName name={quiz?.name as string} index={id as number} />
        </div>
    );
};

export default QuizSelect;
