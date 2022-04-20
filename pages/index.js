import { PageLayout } from '../Components/PageLayout'
import styles from '../styles/Home.module.css'
import { useAppContext } from '../Context'
import { useState } from 'react';
import getNoteService from '../services/GetNote';
import { useEffect } from 'react';

export default function Home() {
  const { user } = useAppContext();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getnotes()
  }, [user]);

  const getnotes = async () => {
    try {
      const notes = await getNoteService({
        user
      });
      setNotes(notes)
    }
    catch (exception) {
      console.log(exception)
    }
  }

  return (
    <PageLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Notes</h1>
      </div>
      <div className={styles.displayNote}>
        {notes.map(note => { return <div key={note.note}>{note.note}</div> })}
      </div>
    </PageLayout>)
}
