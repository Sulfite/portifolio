import React from 'react';
import styles from '../styles/components/SideBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faInstagramSquare }  from '@fortawesome/free-brands-svg-icons';

export function SideBar() {
    return (
        <div className={styles.container}>
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="Vinicius Hungaro"/>
            <p>Vinícius Moreira Hungaro</p>

            <div className={styles.menu}>
                <a href="">Bibliografia</a>
                <a href="">Escola</a>
                <a href="">Experiências</a>
            </div>

            <div className={styles.socialNetwork}>
                <a href="">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
            </div>
        </div>
    );
}