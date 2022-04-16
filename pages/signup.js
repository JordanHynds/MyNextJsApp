import { useState } from 'react'
import { PageLayout } from '../Components/PageLayout'
import styles from '../styles/Home.module.css'
import updateService from '../services/SignUp'


export default function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault;
        try {
            const user = await updateService({
                username, password, email
            });
            console.log(user)
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
                        <label>Enter Password</label>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <label>Enter Email</label>
                        <input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <button>submit</button>
                    </form>
                </main>
            </div>
        </PageLayout>)
}

