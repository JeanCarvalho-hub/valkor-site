import { useContext } from "react";
import { CounterContext } from "@/context/estado";
import Image from "next/image";
//styles
import "@/styles/page/header.css";

export default function Header(){
    const context = useContext(CounterContext);

    if (!context) throw new Error("Header deve estar dentro de CounterContext.Provider");

    const {estado, setEstado} = context;

    function activeMenu(){
        setEstado(blur => !blur)
    }
    return(
        <header className="header">
            <a className="logo-marca"><Image src="/logo-grande.png" alt="valkor" width={50} height={50} className="logo"/><span>Valkor</span></a>
            <nav className="nav-desktop">
                <ul className="list-itens-menu">
                    <li>Início</li>
                    <li>Sobre nós</li>
                    <li>Projetos</li>
                    <li>Planos</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <nav className={`nav-mobile ${estado ? 'active' : ''}`}>
                <ul className="list-itens-menu-mobile">
                    <li>Início</li>
                    <li>Sobre nós</li>
                    <li>Projetos</li>
                    <li>Planos</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <div className="btn-div">
                <Image src="/menu-icone.png" alt="" width={20} height={20} className="btn-menu-mobile" onClick={activeMenu}/>
                <a className="cta-header"><Image src="/whatsapp50.png" alt="whatsapp" width={20} height={20}/><span>Contrate agora</span></a>
            </div>
        </header>
    );
}