import styles from './headerStyle.module.css'

import Logo from "../img/logo.svg"

export function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLogo}>
                <img src={Logo} alt="Logo ToDo app" />
            </div>
        </div>
    );
}

