import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../Components/Header'
import { PageLayout } from '../Components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>Title</h1>
      </div>
    </PageLayout>)
}
