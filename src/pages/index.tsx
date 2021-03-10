import Head from 'next/head';
import { SideBar } from '../components/SideBar';


import styles from '../styles/components/Home.module.css';

// import SideBar from '../components/SideBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vinícius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar />
      
    </div>
  )
}
