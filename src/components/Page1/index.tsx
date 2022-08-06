import './styles.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

type FormData = {
    name?: string,
    level?: number,
    email?: string,
    github?: string,
    page?: number
}

export const Page1 = () => {
    const navigate = useNavigate();
    //state sendo atualizado pelo input
    const [pageName, setPageName] = useState<string>()
    
    let profile: FormData = {}

    //função acionada com o onClick do button
    function setEntireName() {
        if (pageName == '' || pageName == undefined) {
            alert('Digite seu nome!')
        } else {
            profile.name = pageName
            profile.page = 2
            console.log(profile)
            navigate('/Page2')
        }
    }

    return (
        <div className="main-page1">
            <div className="page1-top">
                <p>Passo 1/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
            </div>
            <div className="page1-bottom">
                <p>Seu nome completo</p>
                <input type="text" className="input-name" onChange={event => setPageName(event.target.value)} ></input><br />
                <button className="page1-buttom" onClick={setEntireName}>Próximo</button>
            </div>
        </div>
    )
}