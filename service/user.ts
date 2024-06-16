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