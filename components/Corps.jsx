import styles from "@/app/Corps.module.css"

export default function Corps({ children}) {
    return <>
        <div className={styles.Corps}>
            {children}
        </div>
    </>
}