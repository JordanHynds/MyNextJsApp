import { useState } from 'react'
import { PageLayout } from '../Components/PageLayout'
import styles from '../styles/Home.module.css'
import createNoteService from '../services/CreateNote'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useAppContext } from '../Context'

export default function CreateNote() {
    const [note, setNote] = useState("")
    const { user } = useAppContext();
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(note)
        try {
            const notes = await createNoteService({
                note, user
            });
            setNote("")
        }
        catch (exception) {
            console.log(exception)
        }


    }
    return (
        <PageLayout>
            <h1 className={styles.subtitle}>
                Add a Note
            </h1>
            <div >
                <main>
                    <div>
                        <form id="my-form-id" onSubmit={handleSubmit} className={styles.note}>
                            <TextField
                                id="outlined-basic"
                                label="note"
                                variant="outlined"
                                multiline
                                maxRows={10}
                                fullWidth
                                type="text"
                                required
                                value={note}
                                onChange={(event) => setNote(event.target.value)}
                            />
                            <Button type="submit" form="my-form-id" variant="contained">Submit</Button>
                        </form>
                    </div>
                </main>
            </div >
        </PageLayout>)
}

