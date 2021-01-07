const quizs: object[] = [
    { name: "정답은 X 입니다.0", anwser: "X" },
    { name: "정답은 X 입니다.1", anwser: "X" },
    { name: "정답은 X 입니다.2", anwser: "X" },
    { name: "정답은 X 입니다.3", anwser: "X" },
    { name: "정답은 X 입니다.4", anwser: "X" },
    { name: "정답은 X 입니다.5", anwser: "X" },
    { name: "정답은 X 입니다.6", anwser: "X" },
    { name: "정답은 X 입니다.7", anwser: "X" },
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
