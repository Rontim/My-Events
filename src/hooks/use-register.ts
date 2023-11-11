"use client";

import React, { useState, useEffect } from "react";
import { registerUser } from "@/redux/feature/user/thunk/userThunk";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { useRouter } from "next/navigation";

export default function useRegister() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
    address: "",
    contacts: "",
  });

  let password_missmatch = false

  const {
    email,
    username,
    first_name,
    last_name,
    password,
    re_password,
    address,
    contacts,
  } = formData;
  const dispatch = useAppDispatch();
  const { isLoading, error, status } = useAppSelector(state => state.user)
  const router = useRouter()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    passMismatch();
    if (password_missmatch === false) {
      dispatch(
        registerUser({
          email,
          username,
          first_name,
          last_name,
          password,
          re_password,
          address,
          contacts,
        })
      )

    } else {
      password_missmatch = true
    }
  };

  function passMismatch() {
    if (password === re_password) {
      password_missmatch = false;
      return password_missmatch;
    }
    else {
      password_missmatch = true;
      return password_missmatch;
    }

  }

  useEffect(() => {
    if (status === 201) {
      toast.success('Account created successfully', { theme: 'dark' })
      router.push('/auth/login')
    }
    if (error) {
      console.log('X1', typeof (error))

      Object.keys(error).forEach((field) => {
        error[field].forEach((message: string) => {
          console.log('X2')
          toast.error(message, { theme: 'dark' })
        });
      })

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, error])

  return {
    ...formData,
    isLoading,
    password_missmatch,
    handleChange,
    handleSubmit,
  };
}
