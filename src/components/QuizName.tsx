import React from "react";
import { Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";

interface QuizNameProps {
    name?: string;
}

const QuizName = ({ name }: QuizNameProps) => {
    return (
        <Button
            className="quiz__name"
            color="secondary"
            // endIcon={<Send />}
        >
            <span>{name}</span>
        </Button>
    );
};

export default QuizName;
