import { QuizInterface } from "types/Types";

const quizs: QuizInterface[] = [
    { name: "멋쟁이 사자처럼 1기는 서울대학교에서만 진행했다 ?", answer: true },
    { name: "자소설닷컴은 멋쟁이 사자처럼으로 시작했다 ?", answer: true },
    { name: "멋쟁이 사자처럼은 IT 전공자만 신청 가능하다 ?", answer: false },
    { name: "멋쟁이 사자처럼은 매년 해커톤을 진행한다 ?", answer: true },
    { name: "멋쟁이 사자처럼 활동 시기는 3월부터 12월이다 ?", answer: true },
    { name: "정답은 X 입니다.5", answer: false },
    { name: "정답은 X 입니다.6", answer: false },
    { name: "정답은 X 입니다.7", answer: false },
];

const QUIZ_MAX: number = quizs.length;

const getRandomNum = () => {
    const floatNum: number = Math.random() * QUIZ_MAX;
    const intNum: number = Math.floor(floatNum);

    return intNum;
};

export const getRandomQuiz = (n: number) => {
    const randomNums: number[] = [];

    while (randomNums.length < n) {
        const randomNum = getRandomNum();
        if (!randomNums.includes(randomNum)) {
            randomNums.push(randomNum);
        }
    }

    const randomQuizs: object[] = randomNums.map((num) => {
        return quizs[num];
    });

    return randomQuizs;
};
