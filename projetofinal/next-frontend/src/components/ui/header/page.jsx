import Link from "next/link";
import Button from "../button/page";
import style from "./header.module.css";
import LogoJojosLaranja from "@/assets/logo-jojos-laranja";


export default function Header(){
    return(
        <div className={style.container}>            
            <div>
             
                <span className={style.logo}>
                    <LogoJojosLaranja/>
                    <span>J</span>
                    <span>O</span>
                    <span>J</span>
                    <span>O</span>
                    <span>S</span>
                </span>
            </div>
            <ul className={style.navContainer}>
                <li><Link href={'//#jogos'}>Jogos</Link></li>
                <li><Link href={'//#sobre'}>Sobre</Link></li>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li><Link href={'//#vagas'}><Button text='Carreira'/></Link></li>
            </ul>
        </div>
    )
}