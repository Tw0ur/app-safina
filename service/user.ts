import {users} from "@/service/data";
import {IUsers} from "@/types/types";

interface UserProps {
    email: string;
    password: string;
}
export const getUser = () =>  {
    const email = 'alice.johnson@example.com';
    const password = 'alicepassword123';
    return users.find(user => user.email === email && user.password === password) ;
};

export const changePassword = (email:string, oldPassword:string, newPassword:string):boolean => {
    const user = users.find(user => user.email === email && user.password === oldPassword);

    if (user) {
        user.password = newPassword;
        return true; // Indicates success
    }

    return false; // Indicates failure (user not found or old password doesn't match)
};