"use client"
import { useState, createContext } from "react";
import { CounterContext } from "@/context/estado";
//componentes
import Header from "@/components/Header";
import Home from "@/components/home";
import About from "@/components/about";
import Scroll from "@/components/scroll";
import Project from "@/components/projetos";
import Servicos from "@/components/Servicos";
//styles
import "@/styles/page/main.css"
import Contato from "@/components/contanto";
import Contator from "@/components/contador";
import Rodape from "@/components/rodape";

export default function Page(){
    const [estado, setEstado] = useState(false);
    return(
        <CounterContext.Provider value={{estado, setEstado}}>
            <Header/>
            <main>
                {estado && <div className="overlay" onClick={() => setEstado(false)}></div>}
                <Home/>
                <Contator/>
                <Scroll/>
                <Project/>
                <Servicos/>
                <About/>
                <Contato/>
            </main>
        </CounterContext.Provider>
    );
}