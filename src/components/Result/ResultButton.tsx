import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { ResultElementProps } from "components/Result/ResultConfig";

const ResultButton = ({ isCorrect }: ResultElementProps) => {
    useEffect(() => {}, []);
    return (
        <div className="result__button">
            {isCorrect ? (
                <a href="">
                    <Button variant="contained" color="primary">
                        만든 사람 보기
                    </Button>
                </a>
            ) : (
                <a href="">
                    <Button variant="contained" color="primary">
                        재도전
                    </Button>
                </a>
            )}

            <a
                href="https://github.com/hyesungoh/Like_Amazing_Lion"
                target="_blank"
            >
                <Button variant="contained" color="primary">
                    소스 보기
                </Button>
            </a>
        </div>
    );
};

export default ResultButton;
