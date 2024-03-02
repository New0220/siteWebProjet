import styles from "./MenuNav.module.css"
import Image from "next/image"
import logo from "@/public/logo.png"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function MenuNav() {
    const pathname = usePathname
    return <nav className={styles.nav}>
        <div className={styles.title}>
            <Link href={'/Accueil'}>
            <Image src={logo} alt="Logo React"/>
            </Link>
        </div>
        <div className={styles.navLinks}>
            <ul>
                <li>
                    <Link href="/Accueil" className={pathname === '/Accueil' ? styles.active: ''}> 
                        Accueil 
                    </Link>
                </li>
                <li>
                <Link href="/Events" className={pathname === '/Events' ? styles.active: ''}>
                        Events 
                    </Link>
                </li>
                <li>
                <Link href="/Contacts" className={pathname === '/Contacts' ? styles.active: ''}>
                        Contacts 
                    </Link>
                </li>
            </ul>
        </div>
        <div className={styles.navAuth}>
            <ul>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </div>
    </nav>
}