import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ResultElementProps } from "components/ResultConfig";

const ResultButton = ({ isCorrect }: ResultElementProps) => {
    useEffect(() => {}, []);
    return (
        <div className="result__button">
            {!isCorrect && (
                <Button color="primary">
                    <a href="/">재도전</a>
                </Button>
            )}
            <Button color="primary">
                <Link to="/about">만든 사람 보기</Link>
            </Button>
            <Button color="primary">
                <a
                    href="https://github.com/hyesungoh/Like_Amazing_Lion"
                    target="_blank"
                >
                    소스 보기
                </a>
            </Button>
        </div>
    );
};

export default ResultButton;
