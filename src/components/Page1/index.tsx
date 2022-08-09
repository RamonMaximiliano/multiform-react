import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { LoginContext } from '../../Context/Context'

export const Page1 = () => {
    const navigate = useNavigate();
    //state sendo atualizado pelo input
    const [pageName, setPageName] = useState<string>()

    //métodos de state importados do App através do context
    const { setName } = useContext(LoginContext)
    const { setPage } = useContext(LoginContext)
    const { FullProfile } = useContext(LoginContext)

    //função acionada com o onClick do button
    function setEntireName() {
        if (pageName == '' || pageName == undefined) {
            alert('Digite seu nome!')
        } else {
            setName(pageName)
            setPage(2)
            navigate('/Page2')
        }
    }

    return (
        <div className="main-page1">
            <div className="page1-top">
                <p>Passo {FullProfile.page}/4</p>
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