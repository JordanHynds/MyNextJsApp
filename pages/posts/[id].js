import { PageLayout } from '../../Components/PageLayout'
const pathsBaseUrl = "http://localhost:3000/api/getusers"
const propsBaseUrl = "http://localhost:3000/api/getnotes"
import styles from '../../styles/Home.module.css'
import { Button } from '@mui/material'
import likeNoteService from '../../services/LikeNote'
import { useState } from 'react'

export async function getStaticPaths() {
    const res = await fetch(pathsBaseUrl)
    const response = await res.json()
    const fileNames = response.rows.map(fileName => {
        return {
            params: {
                id: fileName.username
            }
        }
    })
    return {
        paths: fileNames,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const request = new Request(propsBaseUrl, { method: 'POST', body: JSON.stringify({ user: params.id }) });

    const res = await fetch(request)
    const postData = await res.json()
    return {
        props: {
            postData: postData.rows
        }
    }
}


export default function User({ postData }) {
    const [notes, setNote] = useState(postData)

    const handleLike = async (note) => {
        try {
            const id = note.id
            const notes = await likeNoteService({
                id
            });
            setNote(notes.rows)
        }
        catch (exception) {
            console.log(exception)
        }
    }


    return (
        <PageLayout>
            <div>
                <div className={styles.container}>
                    <h1 className={styles.title}>Notes</h1>
                </div>
                <div className={styles.displayNote}>
                    {notes.map(note => {
                        return (
                            <div key={note.note}>
                                <div key={note.note}>{note.note}</div>
                                <div key={note.create_date}>{note.create_date}</div>
                                <div key={note.likebutton}>{note.likebutton}</div>
                                <Button onClick={() => handleLike(note)} variant="contained">Like</Button>
                            </div>)
                    })}
                </div>
            </div>
        </PageLayout >
    )
}