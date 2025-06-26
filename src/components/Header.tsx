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
                    <li><a href="#Home" className="a-menu">Início</a></li>
                    <li><a href="#Projects" className="a-menu">Projetos</a></li>
                    <li><a href="#Services" className="a-menu">Serviços</a></li>
                    <li><a href="#About" className="a-menu">Sobre nós</a></li>
                    <li><a href="#Contact" className="a-menu">Contato</a></li>
                </ul>
            </nav>
            <nav className={`nav-mobile ${estado ? 'active' : ''}`}>
                <ul className="list-itens-menu-mobile">
                    <li><a href="#Home" >Início</a></li>
                    <li><a href="#Projects" onClick={activeMenu}>Projetos</a></li>
                    <li><a href="#Services" onClick={activeMenu}>Serviços</a></li>
                    <li><a href="#About" onClick={activeMenu}>Sobre nós</a></li>
                    <li><a href="#Contact" onClick={activeMenu}>Contato</a></li>
                </ul>
            </nav>
            <div className="btn-div">
                <Image src="/menu-icone.png" alt="" width={20} height={20} className="btn-menu-mobile" onClick={activeMenu}/>
                <a className="cta-header" href="https://wa.me/5516992573047?text=Oi%2C%20gostei%20muito%20da%20ideia%20e%20quero%20saber%20mais!"><Image src="/whatsapp50.png" alt="whatsapp" width={20} height={20}/><span>Contrate agora</span></a>
            </div>
        </header>
    );
}