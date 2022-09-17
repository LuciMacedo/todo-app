import styles from './headerStyle.module.css'

import Logo from "../img/rocket.svg"

export function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLogo}>
                <img src={Logo} alt="Logo ToDo app" />
                <strong className={styles.headerLogoTo}>to</strong>
                <strong className={styles.headerLogoDo}>do</strong>
            </div>
        </div>
    );
}

