import { QuizInterface } from "components/Quizzes";
import { dbService } from "components/firebaseConfig";

export interface ResultProps {
    quizzes: QuizInterface[] | null;
    answers: boolean[];
    isSubmit?: boolean;
    currentUser?: firebase.default.User | null;
}

export interface ResultElementProps {
    isCorrect: boolean;
}

export const saveCorrectUserEmail = async (
    currentUser: firebase.default.User | null | undefined
) => {
    const { email, uid } = currentUser as firebase.default.User;

    if (email !== null && email !== undefined) {
        const now = Date.now();
        const date = new Date(now);

        await dbService.collection("correctedUser").add({
            correctedAt: date.toUTCString(),
            email,
            uid,
        });
    }
};
