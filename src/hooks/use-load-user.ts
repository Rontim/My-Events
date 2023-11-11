'use client';

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLoadUserQuery } from "@/redux/feature/user/userApiSlice";
import { setUser } from "@/redux/feature/user/userSlice";

export default function useLoadUser() {
    const { isAuthenticated } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const { data: user } = useLoadUserQuery(undefined, {
        skip: !isAuthenticated
    });


    useEffect(() => {
        let isMounted = true;

        if (user && isAuthenticated && isMounted) {
            dispatch(setUser(user));
        }

        return () => {
            isMounted = false;
        };

    }, [dispatch, isAuthenticated, user]);
}


