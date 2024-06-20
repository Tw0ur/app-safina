'use client'
import React, { useState } from 'react';
import * as z from 'zod';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {changePassword, getUser} from "@/service/user";


const changePasswordSchema = z.object({
    oldPassword: z.string().min(6, "Old password must be at least 6 characters"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
    const user = getUser()
    const [formData, setFormData] = useState<ChangePasswordFormData>({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ChangePasswordFormData, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
        changePasswordSchema.parse(formData)
        if(user) {

        changePassword(user.email, formData.oldPassword, formData.confirmPassword)
            console.log(user)
        }
    }
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //
    //     try {
    //         changePasswordSchema.parse(formData);
    //         setErrors({});
    //
    //         const response = await fetch('/api/change-password', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //
    //         if (!response.ok) {
    //             throw new Error('Password change failed');
    //         }
    //
    //         alert('Password changed successfully');
    //     } catch (error) {
    //         if (error instanceof z.ZodError) {
    //             const fieldErrors: Partial<Record<keyof ChangePasswordFormData, string>> = {};
    //             error.errors.forEach((err) => {
    //                 fieldErrors[err.path[0] as keyof ChangePasswordFormData] = err.message;
    //             });
    //             setErrors(fieldErrors);
    //         } else {
    //             console.error(error);
    //             alert('An error occurred while changing password');
    //         }
    //     }
    // };
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">

                <AccordionContent>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-4/5 md:w-2/5 mx-auto'>
                        <div>
                            <label htmlFor="oldPassword">Старый пароль</label>
                            <Input
                                type="password"
                                id="oldPassword"
                                name="oldPassword"
                                value={formData.oldPassword}
                                onChange={handleChange}
                            />
                            {errors.oldPassword && <p>{errors.oldPassword}</p>}
                        </div>

                        <div>
                            <label htmlFor="newPassword">Новый пароль</label>
                            <Input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                            {errors.newPassword && <p>{errors.newPassword}</p>}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword">Повторите новый пароль</label>
                            <Input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                        </div>

                        <Button type="submit">Сменить пароль</Button>
                    </form>
                </AccordionContent>
                <AccordionTrigger>Сменить пароль</AccordionTrigger>
            </AccordionItem>
        </Accordion>
    );
};

export default ChangePassword;
