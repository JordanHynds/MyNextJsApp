import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'

export const Header = () => {
    return (
        <div>
            <Link href="/login">Login</Link>
            <Link href="/">Home</Link>
            <Link href="/signup">SignUp</Link>
        </div>
    )
}

