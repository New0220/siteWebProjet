import style from "@/app/Meetings/MeetingEvent.module.css"

/**
 * @type { import { "next" }.Metadata }
 * @returns 
 */

export const metadata = {
    title: 'Meeting',
    description: 'Decouvrez le Meeting Entrepreneuriat et Innovation : Créer le Futur',
    openGraph: {
        title: 'Meeting sur Entrepreneuriat et Innovation : Créer le Futur',
        description: 'Découvrez Le sommet annuel sur l entrepreneuriat et l innovation, intitulé  Entrepreneuriat et Innovation : Créer le Futur qui se déroulera les 15 et 16 Mars 2024',
        images: ['/logo.png']
    }
}

export default function MeetingEvent() {
return (
    <>
    <section className={style.entre}>
        <div>
        <h1>Entrepreneuriat et Innovation : Créer le Futur</h1>
        <p>
            Le sommet annuel sur l entrepreneuriat et l innovation,
            intitulé  Entrepreneuriat et Innovation : Créer le Futur ,
            se déroulera les 15 et 16 Mars 2024.
            Cet événement d exception se tiendra au cœur de L Espace Innovation,
            situé au 500 Avenue des Innovateurs, QC H3E 1T9, dans la dynamique ville de Montréal, Canada.
            Nous sommes fiers d accueillir entrepreneurs, investisseurs, et visionnaires pour échanger
            sur les opportunités et les défis de l innovation et de la création d entreprise.
        </p>
        <div className={style.intervenants}>
            <div>Intervenants: </div>
            <div> Marie-Claude Boisvert </div>
            <div> Alex Genadinik </div>
            <div> Lara Gagnon </div>
        </div>
        </div>
    </section>
    <section className={style.generalite}>
        <div className={style.intros}>
        <h2>Vue d ensemble du Meeting</h2>
        <p>
            Rejoignez-nous pour notre sommet annuel dédié à l entrepreneuriat et à l innovation,
            un rendez-vous incontournable pour tous ceux qui aspirent à façonner l avenir.
            Organisé par L Espace Innovation, ce sommet est une plateforme unique pour découvrir
            les dernières tendances, échanger sur des stratégies gagnantes, et créer des synergies
            entre entrepreneurs ambitieux et investisseurs avant-gardistes.<div/>
            Au fil de cet événement, des leaders d opinion et des entrepreneurs à succès partageront
            leurs parcours, offrant des insights précieux et des conseils pratiques à travers
            des keynotes inspirantes, des panels de discussion et des sessions de networking.
            Que vous soyez à la tête d une startup ou un investisseur cherchant à diversifier
            votre portefeuille, ce sommet représente une opportunité unique de connecter avec des
            esprits similaires et de découvrir des opportunités d affaires émergentes.<div/>
            Nous explorerons des thèmes cruciaux pour l écosystème entrepreneurial, allant de
            la levée de fonds à l innovation disruptive, en passant par les défis de la croissance
            et de la scalabilité.  Entrepreneuriat et Innovation : Créer le Futur est plus qu un
            simple événement ; c est un catalyseur de succès pour les entrepreneurs et les innovateurs
            de demain.
        </p>
        </div>
    </section>
    <section className={style.parcour}>
        <div className={style.suite}>
        <h2>Agenda du Meeting</h2>
        <p>
            Jour 1 : Inspirer l Innovation <div/>
            09h00 - 10h30 : Ouverture et keynote d inspiration <div/>
            10h45 - 12h00 : Panel 1 - Levée de fonds et capital risque <div/>
            14h00 - 15h30 : Ateliers sur l innovation produit <div/>
            15h45 - 17h00 : Sessions de networking <div/>
            <div/>
            Jour 2 : Construire le Futur <div/>
            09h00 - 10h30 : Keynote sur la scalabilité des entreprises <div/>
            10h45 - 12h00 : Panel 2 - Marketing digital et croissance <div/>
            14h00 - 15h30 : Workshop sur l entrepreneuriat social <div/>
            15h45 - 17h00 : Clôture et cocktail de networking <div/>
        </p>
        </div>
    </section>
    </>
)
}