import React, { useEffect, useState } from "react";
import { dbService } from "configs/firebaseConfig";
import { authService } from "configs/firebaseConfig";

const useCheckCorrectedUser = (currentUser: firebase.default.User | null) => {
    const [isCorrectedUser, setIsCorrectedUser] = useState<boolean>(false);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                const { email } = user;

                const correctedUsers = dbService.collection("correctedUser");
                const query = correctedUsers.where("email", "==", email);

                const isExist = query
                    .get()
                    .then((snapshot) => {
                        snapshot.forEach(({ exists }) => {
                            setIsCorrectedUser(exists);
                        });
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    });
            }
        });
    }, []);

    return isCorrectedUser;
};

export default useCheckCorrectedUser;
