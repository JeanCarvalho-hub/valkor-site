import Image from "next/image";
import "@/styles/page/scroll.css"
import "@/styles/page/scrollComentarios.css"

import DivisorBottom from "./div2";
import CalcTela from "./calcTela";

export default function Scroll(){
    return(
        <div className="carousel">
            <div className="carousel-track">
                <h3>Nossos parceiros</h3>
                <ul>
                    <li><Image src="/icone/meta.png" alt="meta ads" width={200} height={200} className="logo-ads"/></li>
                    <li><Image src="/icone/neon2.png" alt="google ads" width={200} height={200} className="logo-ads"/></li>
                    <li><Image src="/icone/tap.png" alt="google ads" width={200} height={200} className="logo-ads"/></li>
                    <li><Image src="/icone/gabriel.png" alt="google ads" width={200} height={200} className="logo-ads"/></li>
                    <li><Image src="/icone/meta.png" alt="meta ads" width={200} height={200} className="logo-ads"/></li>
                    <li><Image src="/icone/neon2.png" alt="google ads" width={200} height={200} className="logo-ads"/></li>
                    <li><Image src="/icone/tap.png" alt="google ads" width={200} height={200} className="logo-ads"/></li>
                    <li><Image src="/icone/gabriel.png" alt="google ads" width={200} height={200} className="logo-ads"/></li>
                </ul>
            <CalcTela/>
            </div>
        </div>
    );
}