import styles from "./Footer.module.css"
import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"

export default function Footer() {
    return <footer className={styles.footer}>
    <div>
        <div>
            <Link href="/">
            <Image src={logo} alt="Logo"/>
            </Link>
        </div>
        <div>
            <span> &copy; MACK-ARTHUR SIALET & GODLIVE NJAKAM | Collège la Cité </span>
        </div>
    </div>
    </footer>
}