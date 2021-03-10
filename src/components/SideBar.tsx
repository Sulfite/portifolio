import React from 'react';
import styles from '../styles/components/SideBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faInstagramSquare }  from '@fortawesome/free-brands-svg-icons';

export function SideBar() {
    return (
        <div className={styles.container}>
            <img src="https://scontent.fmii4-1.fna.fbcdn.net/v/t31.0-8/17973867_1208143242646825_5304037149618716966_o.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_ohc=_VGBnOU1YOUAX99uCBr&_nc_ht=scontent.fmii4-1.fna&oh=d4cc75856b0c7c7968b599078c603dad&oe=60682DA3" alt=""/>
            <p>Vinícius Moreira Hungaro</p>

            <div className={styles.menu}>
                <a href="">Bibliografia</a>
                <a href="">Escola</a>
                <a href="">Experiencias</a>
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