import Link from "next/link";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../styles/Home.module.css';
import { useAppContext } from '../Context'
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Header = () => {
    const { user, setUser } = useAppContext();
    const router = useRouter()

    const Logout = () => {
        setUser(null)
        localStorage.setItem('user', null);
        router.push("/login");
    }

    useEffect(() => {
        if ((typeof window !== "undefined") && (user == null)) {
            setUser(localStorage.getItem('user'));
        }
    });


    if (user != 'null') {
        console.log(user)
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link href="/">Home</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 16 }}>
                            <a href="#" onClick={Logout} color="inherit">Logout</a>
                        </Typography>
                        <Typography variant="h6" component="div" >
                            {user} is logged in
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
    else {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link href="/login">Login</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 16 }}>
                            <Link href="/">Home</Link>
                        </Typography>
                        <Typography variant="h6" component="div" >
                            <Link href="/signup">SignUp</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

