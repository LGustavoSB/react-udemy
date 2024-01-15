import Link from "next/link";
import Button from "../button/page";
import style from "./header.module.css";
import LogoJojosLaranja from "@/assets/logo-jojos-laranja";

export default function Header() {
  return (
    <div className={style.container}>
      <Link href={'/'}>
        <div className={style.logoContainer}>
          <span className={style.logo}>
              <LogoJojosLaranja className={style.logoIcon} />
            <div>
            <span>J</span>
            <span>O</span>
            <span>J</span>
            <span>O</span>
            <span>S</span>
            </div>
          </span>
        </div>
      </Link>
      <ul className={style.navContainer}>
        <li><Link href={'//#jogos'}>Jogos</Link></li>
        <li><Link href={'//#sobre'}>Sobre</Link></li>
        <li><Link href={'/blog'}>Blog</Link></li>
        <li><Link href={'//#vagas'}><Button text='Carreira'/></Link></li>
      </ul>
    </div>
  );
}
