import './styles.css'
import { Route, Routes, Link } from 'react-router-dom'

export const Page3 = () => {
    return (
        <div className="main-page3">
            <div className="page3-top">
                <p>Passo 3/4</p>
                <h1>Legal NOME, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato</p>
            </div>

            <div className="page3-inputs">
                <div className="page3-input">
                    <p>Qual seu e-mail?</p>
                    <input type="text" className="input-field"></input>
                </div>
                <div className="page3-input">
                    <p>Qual seu GitHub?</p>
                    <input type="text" className="input-field"></input>
                </div>
            </div>

            <div className="page3-bottom-div">
                <Link to="/Page2">
                    <button className="page3-buttom">Voltar</button>
                </Link>
                <Link to="/Page4">
                    <button className="page3-buttom-next">Finalizar cadastro</button>
                </Link>
            </div>
        </div>

    )
}