import MenuNav from "./MenuNav"
import styles from "./Header.module.css"

export default function Header() {
    return <header className={styles.header}>
        <MenuNav/>
    </header>
}