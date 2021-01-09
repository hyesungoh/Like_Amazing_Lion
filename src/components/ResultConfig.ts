import { QuizInterface } from "components/Quizzes";

export interface ResultProps {
    quizzes: QuizInterface[] | null;
    answers: boolean[];
    isSubmit?: boolean;
}

export interface ResultElementProps {
    isCorrect: boolean;
}