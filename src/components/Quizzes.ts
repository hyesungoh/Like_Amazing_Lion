export interface QuizInterface {
    name: string;
    answer: boolean;
}

const quizs: QuizInterface[] = [
    { name: "정답은 X 입니다.0", answer: false },
    { name: "정답은 X 입니다.1", answer: false },
    { name: "정답은 X 입니다.2", answer: false },
    { name: "정답은 X 입니다.3", answer: false },
    { name: "정답은 X 입니다.4", answer: false },
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
