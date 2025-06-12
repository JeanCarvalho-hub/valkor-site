import { Metadata } from "next";
//styles
import "@/styles/global.css"

export const metadata: Metadata = {
    title: "Valkor | Technology agency",
    icons: {
        icon: "/logo-grande.png"
    },
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