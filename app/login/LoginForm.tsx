'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useAuth } from "@/hooks/useAuth";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputs from "../components/Inputs";
import { Horizontal } from "../product/[productId]/ProductDetails";

const LoginForm = () =>{

    const {login, isLoading} = useAuth();
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) =>
    {
        login(data);
    }

    return (
        <>
        <div className="flex flex-row items-center">
        <Heading title="LOGIN"/>
        <Image src='/assets/image-form.png' alt="Pet Image" height={200} width={200} className="absolute right-[415px]"/>
        </div>
        <Horizontal />
        <Inputs id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Inputs id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password"/>
        <Button label={isLoading ? "Loading" : "Login"} onClick={handleSubmit(onSubmit)}/>
        <p className="text-sm">{`Don't have an account`} <Link className="underline" href='/register'>Sign up</Link></p>
        </>
    )
}

export default LoginForm;