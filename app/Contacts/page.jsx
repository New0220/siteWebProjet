import Contact from "@/components/Contact.jsx";

/**
 * @type { import { "next" }.Metadata }
 * @returns 
 */

export const metadata = {
    title: 'Formulaire de Contact',
    description: 'Forlulaire de prise de contact avec les utilisateur',
    openGraph: {
        title: 'Contact',
        description: 'Contactez nous directement via ce formulaire',
        images: ['/logo.png'],
        },
}

export default function ContactPage() {
    return (
    <div>
        <Contact />
    </div>
)}