import { ResultProps } from "types/Types";
import { dbService } from "configs/firebaseConfig";

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

export const grading = ({ quizzes, answers, currentUser }: ResultProps) => {
    for (let i = 0; i < answers.length; i++) {
        if (quizzes?.[i].answer !== answers[i]) {
            return false;
        }
    }
    saveCorrectUserEmail(currentUser);
    return true;
};
