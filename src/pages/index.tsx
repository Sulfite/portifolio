import Head from 'next/head';
import { useState } from 'react';
import { Constructor } from '../components/Constructor';

import { SideBar } from '../components/SideBar';

import styles from '../styles/components/Home.module.css';

export default function Home() {

	const [ inContructor, setInConstructor ] = useState(1);

	return (
		<div className={styles.container}>
			{
				inContructor == 1 ? 
					<Constructor /> : 
					<SideBar />
			}
		</div>
	)
}
