import './styles.css'
import { Route, Routes, Link } from 'react-router-dom'

export const Page2 = () => {
    return (
        <div className="main-page1">
            <div className="page1-top">
                <p>Passo 2/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
            </div>
            <div className="page1-bottom">
                <p>Seu nome Test</p>
                

                <input type="text" className="input-name"></input><br/>
                <button className="page1-buttom"><Link to="/Page3" className="linkButton">Próximo</Link></button>
                <button className="page1-buttom"><Link to="/" className="linkButton">Voltar</Link></button>
            </div>
        </div>

    )
}