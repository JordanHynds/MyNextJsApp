import { useState } from 'react'
import { PageLayout } from '../Components/PageLayout'
import styles from '../styles/Home.module.css'
import loginService from '../services/Login'
import { useAppContext } from '../Context'
import { useRouter } from 'next/router'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

export default function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const { setUser } = useAppContext();
    const router = useRouter()


    const handleUsername = (value) => {
        const username = value.replace(/\s/g, '')
        setUsername(username)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await loginService({
                username, password
            })
            if (user) {
                setUser(user)
                localStorage.setItem('user', user);
                router.push("/");
            }
        }
        catch (exception) {
            console.log(exception)

        }


    }
    return (
        <PageLayout>
            <h1 className={styles.subtitle}>
                Login
            </h1>
            <div >
                <main>
                    <div>
                        <form id="my-form-id" onSubmit={handleSubmit} className={styles.login}>
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                type="text"
                                required
                                value={username}
                                onChange={(event) => handleUsername(event.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                required
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <Button type="submit" form="my-form-id" variant="contained">Submit</Button>
                        </form>
                    </div>
                </main>
            </div >
        </PageLayout >)
}

