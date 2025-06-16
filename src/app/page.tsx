"use client"
import { useState, createContext } from "react";
import { CounterContext } from "@/context/estado";
//componentes
import Header from "@/components/Header";
import Home from "@/components/home";
import About from "@/components/about";
//styles
import "@/styles/page/main.css"
import Scroll from "@/components/scroll";
import Project from "@/components/projetos";
import Servicos from "@/components/Servicos";

export default function Page(){
    const [estado, setEstado] = useState(false);
    return(
        <CounterContext.Provider value={{estado, setEstado}}>
            <Header/>
            <main>
                {estado && <div className="overlay" onClick={() => setEstado(false)}></div>}
                <Home/>
                <Scroll/>
                <Project/>
                <Servicos/>
            </main>
        </CounterContext.Provider>
    );
}