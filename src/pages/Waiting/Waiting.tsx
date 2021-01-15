import React from "react";
import {Button} from "@material-ui/core";
import "pages/Waiting/Waiting.scss";

const Waiting = () => {
    return (
        <div className="waiting">
            <div className="background__waiting"></div>
            <div className="waiting__content">
                <div className="content__title">
                    <h1>축하합니다 !</h1>
                    <p>3가지 문제를 모두 맞혔을 시, <br/>자동적으로 이벤트 응모가 완료된 것 입니다! 🎁</p>
                    <p>당첨자 추첨은 <b>2월 99일</b>에 진행할 예정이며,<br/>당첨자에게는 이메일로 연락드리겠습니다. 😁</p>
                </div>
                <div className="content__other">
                    <a href=""><Button color="primary">멋쟁이사자처럼 자세히 알아보기</Button></a>
                    <a href=""><Button color="primary">맛집 보기</Button></a>
                </div>
            </div>
        </div>
    );
};

export default Waiting;
