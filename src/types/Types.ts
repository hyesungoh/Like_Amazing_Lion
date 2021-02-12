
export interface NavInterface {
    user: firebase.default.User | null;
}

export interface QuizInterface {
    name: string;
    answer: boolean;
}

export interface QuizSelectInterface {
    id: number;
    isCurrent: boolean;
    quiz?: QuizInterface;
    answer: boolean[];
    setAnswer?: React.Dispatch<React.SetStateAction<boolean[]>>;
}