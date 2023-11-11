'use client';

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth, finishInitialLoad, logout } from "@/redux/feature/user/userSlice";
import { useVerifyMutation } from "@/redux/feature/user/userApiSlice";
import { useRouter } from "next/navigation";

export default function useCheckAuth() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [verify] = useVerifyMutation();

    useEffect(() => {
        verify(undefined)
            .unwrap()
            .then(() => {
                dispatch(setAuth());
                router.refresh()
            })
            .catch((err: any) => {
                console.log(err);
                dispatch(logout());
            })
            .finally(() => {
                dispatch(finishInitialLoad());
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
