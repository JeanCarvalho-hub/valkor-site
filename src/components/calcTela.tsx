import { useState, useEffect } from "react";
import Comentarios from "./comentario";
import ComentarioScroll from "./comentarioScroll";
export default function CalcTela(){
    const [tela, setTela] = useState(0);
    useEffect(() => {
        const atualizarTela = () => {
            setTela(window.innerWidth);
        }
        window.addEventListener("resize", atualizarTela);

        atualizarTela();
        
    return () => {
        window.removeEventListener("resize", atualizarTela); 
    }
    }, [])
    return(
        <>    
            {tela > 1120 ? (<Comentarios/>) : (<ComentarioScroll/>)}
        </>
    );
}