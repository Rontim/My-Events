'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/feature/user/userApiSlice';
import { setAuth } from '@/redux/feature/user/userSlice';
import { toast } from 'react-toastify';



export default function useLogin() {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;
    const [login, { isLoading }] = useLoginMutation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        return setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        login({ email, password })
            .unwrap()
            .then((res) => {

                dispatch(setAuth());
                toast.success(res, {
                    theme: "dark",
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "green",
                    }
                })
                router.replace("/");
            })
            .catch((err) => {

                toast.error(err.message, {
                    theme: "dark", style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "red",
                    }
                })
            });

    };

    return {
        email,
        password,
        isLoading,
        handleChange,
        handleSubmit,
    };
}