import './styles.css'
import { Route, Routes, Link } from 'react-router-dom'

export const Page4 = () => {
    return (
        <div className="main-page1">
            <div className="page1-top">
                <p>Passo 4/4</p>
                <h1>Profile</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
            </div>
            <div className="page1-bottom">
                <p>Seu nome Test</p>
                <Link to="/Page3">
                    <button className="page3-buttom">Voltar</button>
                </Link>

            </div>
        </div>

    )
}