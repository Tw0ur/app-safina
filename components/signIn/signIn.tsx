/*
import {db} from "@/service/db";
import {z} from "zod";


const createUserSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string(),
})
const Auth = () => {
    async function newUser(data: FormData) {
        'use server'

        const createUser = createUserSchema.parse({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        })

        const user = await db.user.create({
            data: createUser,
        })


    }
    return (
        <>
            <h1>Добавление эзера</h1>
            <form action={newUser}>
                <input type="email" name='email' required/>
                <input type="name" name='name' required/>
                <input type="password" name='password' required/>
                <button type='submit'>Register</button>
            </form>
        </>
    );
};

export default Auth;
*/
