import React from "react";
import { Button } from "@material-ui/core";
import "pages/Waiting/Waiting.scss";

const Waiting = () => {
    // other content's url
    const LIKELION_INFORMATION_URL: string = "https://skhu-likelion-9th.github.io/likeInformative_Lion/";
    const LIKELION_FOOD_URL: string = "https://skhu-likelion-9th.github.io/LikeFoodLion/";

    return (
        <div className="waiting">
            <div className="background__waiting"></div>
            <div className="waiting__content">
                <div className="content__title">
                    <h1>축하합니다 !</h1>
                    <p>
                        3가지 문제를 모두 맞혔을 시, <br />
                        자동적으로 이벤트 응모가 완료된 것 입니다! 🎁
                    </p>
                    <p>
                        당첨자 추첨은 <b>3월 2일</b>에 진행할 예정이며,
                        <br />
                        당첨자에게는 이메일로 연락드리겠습니다. 😁
                    </p>
                </div>
                <div className="content__other">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={LIKELION_INFORMATION_URL}
                    >
                        <Button color="primary">
                            멋쟁이사자처럼 자세히 알아보기
                        </Button>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={LIKELION_FOOD_URL}
                    >
                        <Button color="primary">맛집 보기</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Waiting;
