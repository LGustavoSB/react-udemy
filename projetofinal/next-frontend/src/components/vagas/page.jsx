import VagaCard from "../ui/cards/vaga-card/page" 
import style from './vagas.module.css'
import { getData } from "@/utils/getData"


const vagas = await getData('vagas')

export default function Vagas(){
    return (
        <div id="vagas">
            <h1 className={style.title}>Carreira</h1>
                
            <div className={style.container}>
                
                {vagas.map((vaga, key) => (
                    <div className={style.vagaCard} key={key} >
                        <VagaCard  vaga={vaga}/>
                    </div>)
                )}
            </div>
        </div>
    )
}
