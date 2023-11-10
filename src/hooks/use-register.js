"use client";

import { useState } from "react";
import { useRegisterMutation } from "@/redux/feature/user/userApiSlice";
import { toast } from "react-toastify";
import router from "next/navigation";

export default function useRegister() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fist_name: "",
    last_name: "",
    password: "",
    re_password: "",
    address: "",
    contacts: "",
  });
  const [passMismatch, setPassMismatch] = useState(false);

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

  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    return setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handlePasswordValidation) {
      if (passMismatch === false) {
        setPassMismatch(!passMismatch);
        register({
          email,
          username,
          first_name,
          last_name,
          password,
          re_password,
          address,
          contacts,
        })
          .unwrap()
          .then(() => {
            toast.success("Account created successfully", {
              theme: "dark",
            });
            router.push("/auth/login");
          })
          .catch(() => {
            toast.error("Something went wrong", {
              theme: "dark",
            });
          });
      }
    } else {
      setPassMismatch(!passMismatch);
    }
  };

  const handlePasswordValidation = () => {
    return password === re_password;
  };

  return {
    ...formData,
    isLoading,
    passMismatch,
    handleChange,
    handleSubmit,
  };
}
