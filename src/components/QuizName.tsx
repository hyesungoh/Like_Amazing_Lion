import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import {
    Clear,
    ClearOutlined,
    PanoramaFishEye,
    PanoramaFishEyeOutlined,
} from "@material-ui/icons";

interface QuizNameProps {
    name: string;
    submitAnswer?: boolean;
    submitValue?: boolean;
    index: number;
    setCurrentQuiz?: React.Dispatch<React.SetStateAction<number>>;
}

const QuizName = ({
    name,
    index,
    submitValue,
    submitAnswer,
    setCurrentQuiz,
}: QuizNameProps) => {
    const trueIcon = () => (
        <Checkbox
            checked
            className="quiz__yes"
            icon={<PanoramaFishEyeOutlined />}
            checkedIcon={<PanoramaFishEye />}
        />
    );

    const falseIcon = () => (
        <Checkbox
            checked
            className="quiz__no"
            icon={<ClearOutlined />}
            checkedIcon={<Clear />}
        />
    );

    const onClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (submitAnswer && setCurrentQuiz) {
            setCurrentQuiz(index);
        }
    };

    return (
        <Button className="quiz__name" color="secondary" onClick={onClick}>
            <span className={`name__span ${submitAnswer && "name__check" }`}>
                {name}
                {submitAnswer ? (submitValue ? trueIcon() : falseIcon()) : ""}
            </span>
        </Button>
    );
};

export default QuizName;
