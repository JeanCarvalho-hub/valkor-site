import { Metadata } from "next";
//styles
import "@/styles/global.css"

export const metadata: Metadata = {
    title: "Valkor | Technology agency",
    icons: {
        icon: "/logo-grande.png"
    },
    description: "A Valkor é especialista em presença digital estratégica. Criamos sites, landing pages, posts para redes sociais, materiais para eventos e cartões de visita com identidade visual alinhada ao seu público. Também atuamos com tráfego pago e orgânico, aplicando estratégias de marketing que posicionam sua marca e impulsionam resultados reais.",
    other: {
        author: "Valkor - Onde a estratégia vira poder"
    }
}

export default function RootLayout({children} : {children: React.ReactNode}){
    return(
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    );
}