import styles from "@/app/Accueil/Corps.module.css"

export default function Corps({ children}) {
    return <>
        <div className={styles.Corps}>
            {children}
        </div>
    </>
}