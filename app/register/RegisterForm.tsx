'use client'

import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/hooks/useAuth";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputs from "../components/Inputs";
import { Horizontal } from "../product/[productId]/ProductDetails";

const RegisterForm = () =>{

    const {signup, isLoading} = useAuth();
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            email: '',
            password: '',
            name: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) =>
    {
        signup(data);
    }

    return (
        <>
         <div className="flex flex-row items-center">
        <Heading title="REGISTER"/>
        <Image src='/assets/image-form.png' alt="Pet Image" height={200} width={200} className="absolute right-[415px]"/>
        </div>
        <Horizontal />
        <Inputs id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
        <Inputs id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Inputs id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password"/>
        <Button label={isLoading ? "Loading" : "Register"} onClick={handleSubmit(onSubmit)}/>
        <p className="text-sm">Already have an account? <Link className="underline" href='/login'>Login</Link></p>
        </>
    )
}

export default RegisterForm;