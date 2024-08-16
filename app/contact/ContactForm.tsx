'use client'

import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputs from "../components/Inputs";
import { Horizontal } from "../product/[productId]/ProductDetails";

const ContactForm = () =>{

    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) =>
    {
    }

    return <>
         <div className="flex flex-row items-center">
        <Heading title="Contact Us"/>
        </div>
        <Horizontal />
        <Inputs id="email" label="Email" register={register} errors={errors} required/>
        <Inputs id="comments" label="Comments" register={register} errors={errors} required type="password"/>
        <Button label='Submit' onClick={handleSubmit(onSubmit)}/>
    </>
}

export default ContactForm;