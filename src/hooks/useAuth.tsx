import React, { useEffect, useState } from "react";
import { authService } from "configs/firebaseConfig";

const useAuth = () => {
    const [currentUser, setCurrenUser] = useState<firebase.default.User | null>(
        authService.currentUser
    );

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            setCurrenUser(user);
        });
    }, []);

    return currentUser;
};

export default useAuth;
