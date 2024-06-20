import React from 'react';
import {getUser} from "@/service/user";
import {IUsers} from "@/types/types";
import ChangePassword from "@/components/сhangePassword/сhangePassword";

const Profile = () => {
    const user :IUsers | undefined = getUser()
    return (
        <div className='w-[60vw] mx-auto'>
            <div className='w-full '>
                <h1 className='my-7 text-3xl'>Профиль</h1>
                <hr/>
            </div>
            <div className='flex flex-col gap-2 my-10 text-base sm:text-lg'>
                <div>Электронная почта: {user?.email}</div>
                <div>Дата регистрации: {user?.created_at.toLocaleString()}</div>
                <div>Уникальный идентификатор: {user?.id}</div>
            </div>
            <ChangePassword/>
        </div>
    );
};

export default Profile;
