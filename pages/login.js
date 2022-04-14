import { useState } from 'react'
import { PageLayout } from '../Components/PageLayout'
import styles from '../styles/Home.module.css'
import loginService from '../services/Login'


export default function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault;
        try {
            const user = await loginService({
                username, password,
            })
        }
        catch (exception) {
            console.log(exception)

        }


    }
    return (
        <PageLayout>
            <h1>
                hello
            </h1>
            <div className={styles.container}>
                <main>
                    <form onSubmit={handleSubmit}>
                        <label>Enter UserName</label>
                        <input
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <label>Enter UserName</label>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button>submit</button>
                    </form>
                </main>
            </div>
        </PageLayout>)
}

