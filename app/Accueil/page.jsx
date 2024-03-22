import Corps from "@/components/Corps"
import Image from "next/image"
import concert from "@/public/concert.jpg"
import festival from "@/public/festival.jpg"
import Godlive from "@/public/Godlive.jpg"
import MackArture from "@/public/MackArture.jpg"
import style from "@/app/Accueil/Corps.module.css"

/**
 * @type { import { "next" }.Metadata }
 * @returns 
 */

export const metadata = {
    title: 'Accueil',
    description: 'Agenda local dévénements',
    openGraph: {
        title: 'Agenda local d événements',
        description: 'Découvrez et explorez les événements locaux avec facilité grâce à notre plateforme centralisée. Personnalisez vos préférences et trouvez des événements en fonction de vos intérêts, de votre localisation et du type d événements que vous aimez.',
        images: ['/logo.png']
    }
}

export default function Accueil() {
return <div>
    <Corps>
        <section className={style.intro}>
            <h1>Discover Local Events</h1>
            <p>
                Agenda local d événements is a website designed 
                to provide a centralized platform where users can discover 
                and learn about various local events such as concerts, plays, art exhibitions, and more.
            </p>
        </section>

        <section className={style.about}>
            <div className={style.introContent}>
                <h2>Bringing Local Events to Your Doorstep</h2>
                <p>
                    Agenda local d événements is a website designed to 
                    provide a centralized platform where users can discover 
                    and learn about various local events such as concerts, plays, 
                    art exhibitions, and more. Our intuitive user interface allows 
                    visitors to easily browse upcoming events. Personalization is a key feature, 
                    allowing users to configure their preferences to see events based 
                    on their interests, location, and the type of events they enjoy. 
                    In addition, our search options enable users to filter events by date, genre, and location.
                </p>
            </div>
            <Image src={concert} alt="Concert"/>
        </section>

        <section className={style.introSection}>
            <Image src={festival}  alt="festival" />
            <div className={style.introContent}>
                <h2>Discover and Explore Local Events with Ease</h2>
                <p>
                    Agenda local d événements provides a centralized platform 
                    for users to discover and learn about various local events 
                    such as concerts, plays, art exhibitions, and more. 
                    With an intuitive user interface, visitors can easily browse 
                    upcoming events. Personalization is a key feature, 
                    allowing users to configure their preferences to see events 
                    based on their interests, location, and the type of events 
                    they enjoy. The site also includes search options, enabling 
                    users to filter events by date, genre, and location.
                </p>
            </div>
        </section>

        <section className={style.teams}>
            <h2>Meet Our Team</h2>
            <p>We are a passionate and dedicated team.</p>
            <div className={style.teamGrid}>
                <div className={style.teamMember}>
                    <Image src={Godlive}  alt="Godlive" />
                    <h3> GODLIVE </h3>
                    <p className={style.role}> CEO </p>
                    <p> Godlive is a visionary leader with a strong 
                        background in event management.
                    </p>
                </div>
                <div className={style.teamMember}>
                    <Image src={MackArture}  alt="MackArture" />
                    <h3> Mack-Arture </h3>
                    <p className={style.role}> COO </p>
                    <p> Mack-Arture is a visionary leader of our operation with a strong 
                        background in event management.
                    </p>
                </div>
            </div>
        </section>
    </Corps>
</div>
}