import { PageLayout } from '../../Components/PageLayout'
const pathsBaseUrl = "http://localhost:3000/api/getusers"
const propsBaseUrl = "http://localhost:3000/api/getnotes"
import styles from '../../styles/Home.module.css'
import { Button } from '@mui/material'

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

    const handleSubmit = async (event) => {
        event.preventDefault();
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
            <div>
                <div className={styles.container}>
                    <h1 className={styles.title}>Notes</h1>
                </div>
                <div className={styles.displayNote}>
                    {postData.map(note => { return <div key={note.note}>{note.note}</div> })}
                </div>
                <Button onClick={() => { }} variant="contained">Submit</Button>
            </div>
        </PageLayout >
    )
}