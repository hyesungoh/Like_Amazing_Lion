export interface NavInterface {
    user: firebase.default.User | null;
}

export interface CustomAlertProps {
    msg: string;
    setMsg: React.Dispatch<React.SetStateAction<string>>;
}

export interface QuizInterface {
    name: string;
    answer: boolean;
}

export interface QuizSelectInterface {
    id?: number;
    isCurrent: boolean;
    quiz?: QuizInterface;
    answer: boolean[];
    setAnswer?: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export interface QuizLastSlidePros extends QuizSelectInterface {
    quizzes: QuizInterface[] | null;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface QuizSliderProps {
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    maxQuizNum: number;
    currentQuizNum: number;
}

export interface QuizProgressProps {
    maxQuizNum: number;
    currentQuizNum: number;
    setCurrentQuizNum: React.Dispatch<React.SetStateAction<number>>;
}

export interface ResultProps {
    quizzes: QuizInterface[] | null;
    answers: boolean[];
    isSubmit?: boolean;
    currentUser?: firebase.default.User | null;
}

export interface ResultElementProps {
    isCorrect: boolean;
}
