import { useEffect, useState } from 'react'
import api from '../../api/api';
import './dex.css'

function Dex() {

    const [person, setPerson] = useState<any[]>([])
    const [carregado, setCarregado] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {

        api.post('/person/listar').then(result => {
            console.log(result)
            setPerson(result.data)
            setCarregado(true)
        }).catch(err => console.error(err));

    }, []);

    return (
        <>
        <div className="btn-container">
            <button className='btn-left' onClick={() => setIndex(index-1)} disabled={person[index -1]? false: true}>{person[index -1]? `← ${person[index-1].name}`: ''}</button>
            <button className='btn-right' onClick={() => setIndex(index+1)} disabled={person[index + 1]? false: true}>{person[index + 1]? `${person[index+1].name} →`: ''}</button>
        </div>
        <div className="main">
            <div className="foto">
                {carregado? 
                    <img className="picture" src={person[index].picture} alt={`Foto do ${person[index].name}`} title={`Foto do ${person[index].name}`}/> 
                    : 
                    <p>Carregando...</p>}
            </div>
            <div className="infos">
                <div className="person">
                    <h2>Pessoa</h2>
                    {carregado? 
                        <>
                            <p><strong>Nome: </strong> {person[index].name}</p>
                            <p><strong>Twitter: </strong><a href={person[index].twitter_link}>{person[index].twitter_user}</a></p> 
                            <p><strong>Discord: </strong> {person[index].discord_name}</p>
                            <p><strong>Anilist/mal: </strong><a href={person[index].anilist_mal}>{person[index].anilist_mal}</a></p>
                            <p><strong>Link: </strong> {person[index].link? <a href={person[index].link}>{person[index].link}</a>: 'Não tem'}</p> 
                            <p><strong>Descrição: </strong>{person[index].description}</p>

                        </> 
                        : <p>Carregando...</p>}
                </div>
                <div className="hability">
                    <h2>Habilidade</h2>
                    {carregado? 
                        <>
                        {person[index].Hability_person.map((value: any) => {
                            return (
                                <p>
                                    <strong>Nome da habilidade: </strong>{value.Hability.name} <br/>
                                    <strong>Descrição: </strong>{value.Hability.description}
                                </p>
                            )
                        })}
                        </>
                        : <p>Carregando...</p>}
                </div>
            </div>
        </div>
        </>

    )
}

export default Dex