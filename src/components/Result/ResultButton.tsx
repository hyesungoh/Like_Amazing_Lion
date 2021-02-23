import React from "react";
import { Button } from "@material-ui/core";
import { ResultElementProps } from "types/Types";

const ResultButton = ({ isCorrect }: ResultElementProps) => {
    // 정답, 오답을 구분하여 Button 태그를 보여줌

    const SOURCE_URL: string = "https://github.com/hyesungoh/Like_Amazing_Lion";
    const APPLY_URL: string = "https://apply.likelion.org/";

    return (
        <div className="result__button">
            {isCorrect ? (
                <a href="">
                    <Button variant="contained" color="primary">
                        메인으로 가기
                    </Button>
                </a>
            ) : (
                <a href="">
                    <Button variant="contained" color="primary">
                        재도전
                    </Button>
                </a>
            )}

            <a href={APPLY_URL} target="_blank">
                <Button variant="contained" color="primary">
                    멋쟁이 사자처럼 9기 지원하기
                </Button>
            </a>

            <a href={SOURCE_URL} target="_blank">
                <Button variant="contained" color="primary">
                    소스 보기
                </Button>
            </a>
        </div>
    );
};

export default ResultButton;
