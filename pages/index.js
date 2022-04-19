import { PageLayout } from '../Components/PageLayout'
import styles from '../styles/Home.module.css'
import { useAppContext } from '../Context'

export default function Home() {
  const { user } = useAppContext();
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Title</h1>
      </div>
    </PageLayout>)
}
