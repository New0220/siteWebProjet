import style from '@/app/Events/Events.module.css'
import Image from "next/image"
import Conference from "@/public/Conference.jpg"
import Meeting from "@/public/Meeting.jpg"
import Link from 'next/link'

/**
 * @type { import { "next" }.Metadata }
 * @returns 
 */

export const metadata = {
    title: 'Events',
    description: 'Liste d evenements locale',
    openGraph: {
        title: 'Events',
        description: 'Découvrez une multitude d evenement pas loin de vous',
        images: ['/logo.png']
    }
}

export default function Events() {
    return <>
<div className={style.events}>
    <section className={style.eventsEnter}>
    <h1>Find Local Events</h1>
        <p>
            Discover upcoming events in your area and never miss out on the fun! 
            Use our filter or search bar to quickly find the events that interest you.
        </p>
    </section>
    <section className={style.eventsSection}>
        <div className={style.eventsIntro}>
            <h2>Upcoming</h2>
            <p>Explore and stay informed about local events.</p>
        </div>
        <div className={style.eventsList}>
            <div className={style.eventCard}>
                <div className={style.eventImage}>
                    <Image src={Conference} alt="Conference"/>
                </div>
                <div className={style.eventInfo}>
                    <div className={style.eventDate}>
                        <span className={style.eventDay}>Friday </span>
                        <span className={style.eventNumber}>09 </span>
                        <span className={style.eventMonth}>Feb 2024</span>
                    </div>
                    <h3> University Conference </h3>
                    <p>
                        Academic event that brings together experts, 
                        researchers and students to discuss the latest advances and research in the field of AI. 
                        It includes presentations, workshops and plenary lectures. 
                        The event aims to foster knowledge exchange and stimulate innovation in the field of artificial intelligence.
                    </p>
                    <Link href='Conferences' className={style.viewEvent} >
                        View event
                    </Link>
                </div>
            </div>
            <div className={style.eventCard}>
                <div className={style.eventImage}>
                    <Image src={Meeting} alt="Meeting"/>
                </div>
                <div className={style.eventInfo}>
                    <div className={style.eventDate}>
                        <span className={style.eventDay}>Monday </span>
                        <span className={style.eventNumber}>12 </span>
                        <span className={style.eventMonth}>Feb 2024</span>
                    </div>
                    <h3> Meeting Entreprenarial </h3>
                    <p>
                    A gathering of professionals, entrepreneurs, investors and experts, 
                    designed to exchange ideas, form partnerships, and discuss business strategies and trends. 
                    These meetings offer networking, mentoring and professional development opportunities, 
                    essential for business growth and innovation. In addition, 
                    they often serve as a platform to present new technologies.
                    </p>
                    <Link href='/Meetings' className={style.viewEvent}>
                        View event
                    </Link>
                </div>
            </div>
        </div>
    </section>
</div>
    </>
}