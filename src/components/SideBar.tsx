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
                <a href="">
                    Bibliografia
                    <span></span>
                </a>
                <a href="">
                    Escola
                    <span></span>
                </a>
                <a href="">
                    Experiências
                    <span></span>
                </a>
            </div>

            <div className={styles.socialNetwork}>
                <a href={"//www.instagram.com/vini_hungaro/"} target='_blank'>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                <a href={"//www.facebook.com/vinicius.moreirahungaro"} target='_blank' >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a href={"//github.com/Sulfite"}  target='_blank'>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
            </div>
        </div>
    );
}