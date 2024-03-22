import style from "@/app/Conferences/ConferensEvent.module.css"
import Image from "next/image"
import UiConference from "@/public/UiConference.jpg"

/**
 * @type { import { "next" }.Metadata }
 * @returns 
 */

export const metadata = {
    title: 'Conferences',
    description: 'Decouvrez la conference sur Intelligence Artificiel: Révolution et Perspective',
    openGraph: {
        title: 'Conference sur Intelligence Artificiel: Révolution et Perspective',
        description: 'Découvrez la conference annuelle sur Intelligence Artificiel: Révolution et Perspective aura lieu au cœur de La Cité Collégiale le 09 et 10 Fevrier 2024',
        images: ['/logo.png']
    }
}

export default function ConferensEvent() {
    return <> 
        <section className={style.entete}>
            <div>
            <h1>Intelligence Artificiel: Révolution et Perspective </h1>
            <p>
            La conférence annuelle sur l intelligence artificielle, 
            intitulée L Intelligence Artificielle: Révolutions et Perspectives, 
            se tiendra le 09 et 10 Fevrier 2024. 
            Cet événement prestigieux aura lieu au cœur de La Cité Collégiale, 
            situé à 801 Promenade de L aviation, ON K1K 4R3, dans la vidivante ville d Ottwa, Canada. 
            Nous avons l honneur d accueillir académiciens, professionnels et étudiants dans un espace dédié à 
            l exploration et à la discussion sur les avancées de l IA.
            </p>
            <div className={style.intervenants}>
                <div>Intervenants: </div>
                <div> Jonathan Wilkie </div>
                <div> Godlive Njakam </div>
                <div> Mack-Arthur Sialet </div>
            </div>
            </div>
        </section>

        <section className={style.apercu}>
            <div className={style.intro}>
                <h2>Présentation Générale</h2>
                <p>
                Bienvenue à notre conférence annuelle dédiée à l intelligence artificielle, 
                un domaine en constante évolution qui façonne notre avenir. Organisée par 
                la Cité Collegiale, 
                cette conférence est une plateforme unique pour découvrir les innovations récentes, 
                débattre des implications éthiques et envisager les développements futurs de l IA. 
                Rejoignez-nous pour une exploration approfondie des potentialités que 
                l intelligence artificielle offre à notre société, à notre économie et à nos vies personnelles.<div/> 
                Au cours de cet événement, des experts de renommée internationale partageront leurs connaissances 
                et expériences à travers des conférences magistrales, des panels de discussion et des ateliers interactifs. 
                Que vous soyez chercheur, professionnel de l industrie ou étudiant passionné par l IA, 
                cette conférence est une occasion inégalée d échanger avec des leaders 
                d opinion et d élargir votre réseau dans ce champ dynamique et innovant.<div/> 
                Nous aborderons des sujets variés, allant de l apprentissage automatique à l éthique en IA, 
                en passant par les applications révolutionnaires dans des secteurs comme la santé, la finance, et l éducation. 
                La conférence L Intelligence Artificielle: Révolutions et Perspectives est plus qu un simple événement académique ; 
                c est une fenêtre sur l avenir, offrant des perspectives enrichissantes sur la manière dont l IA peut continuer à transformer notre monde.
                </p>
            </div>
            <Image src={UiConference} alt="UiConference"/>
        </section>
        <section className={style.deroulement}>
            <div className={style.suivis}>
                <h2> Programme de la présentation </h2>
                <p>
                Jour 1 : Les Fondamentaux de l IA <div/> 
                09h00 - 10h30 : Inauguration et discours de bienvenue <div/> 
                10h45 - 12h00 : Panel 1 - IA et apprentissage automatique : État de l art <div/> 
                14h00 - 15h30 : Ateliers interactifs <div/> 
                15h45 - 17h00 : Conférence magistrale - L impact de l IA sur la société <div/> 
                <div/> 
                Jour 2 : IA dans l Industrie et la Recherche <div/>
                09h00 - 10h30 : Panel 2 - IA dans la santé : Opportunités et défis <div/> 
                10h45 - 12h00 : Présentations de recherches étudiantes <div/> 
                14h00 - 15h30 : Table ronde - Ethique et IA : Un équilidive à trouver <div/> 
                15h45 - 17h00 : Clôture et perspectives futures <div/> 
                </p>
            </div>
        </section>
    </>
    }