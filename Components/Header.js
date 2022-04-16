import Link from "next/link";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useAppContext } from '../Context'
import { useRouter } from "next/router";


export const Header = () => {
    const { user, setUser } = useAppContext();
    const router = useRouter()
    const Logout = () => {
        setUser(null)
        router.push("/login");
    }
    if (user) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link href="/">Home</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 16 }}>
                            <Button onClick={Logout} color="inherit">Logout</Button>
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

