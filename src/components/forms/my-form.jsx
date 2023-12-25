"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {handleMyFormSubmit} from "@/actions/actions";

export const myFormSchema = z.object({
  firstName: z.string().min(1, { message: 'firstName Required' }),
  lastName: z.string().min(1, { message: 'lastName Required' }).toUpperCase(),
  email: z.string().trim().min(1,{message: "need email"}).email({message: "need correct email"})
});

export default function MyForm() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(myFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    await handleMyFormSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First name</label>
        <input {...register("firstName")}/>
        {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
      </div>
      <div>
        <label>Last name</label>
        <input {...register("lastName")}/>
        {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")}/>
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <input type="submit" value="Submit"/>
    </form>
  )
}
