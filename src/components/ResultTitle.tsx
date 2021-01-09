import React from "react";

import { ResultElementProps } from "components/ResultConfig";

const ResultTitle = ({ isCorrect }: ResultElementProps) => {
    return <div className="result__title">
        <span className="title__header">축하합니다</span>
        <span className="title__info">상품은 어쩌구저쩌구</span>
    </div>;
};

export default ResultTitle;
