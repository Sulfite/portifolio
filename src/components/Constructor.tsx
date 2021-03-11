import styles from '../styles/components/Constructor.module.css';

export function Constructor () {
    return (
        <div className={styles.container}>
            <img src="inConstructor.png" alt="Em Construção"/>
            <p>Site em construção.<br />Aguardo ansiosamente pelo seu retorno.</p>
        </div>
    );
}