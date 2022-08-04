import './styles.css'
import { Route, Routes, Link } from 'react-router-dom'

export const Page2 = () => {
    return (
        <div className="main-page2">
            <div className="page2-top">
                <p>Passo 2/4</p>
                <h1>Nome, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente</p>
            </div>

            <div className="page2-options">
                <div className="sub-page2-options">
                    <div className="page2-icon">👶</div>
                    <div>
                        <h3>Sou iniciante</h3>
                        <p>Comecei a programar há menos de 2 anos</p>
                    </div>
                </div>
                <div className="sub-page2-options">
                    <div className="page2-icon">😎</div>
                    <div>
                        <h3>Sou Programador</h3>
                        <p>Já programo há 2 anos ou mais</p>
                    </div>
                </div>
            </div>

            <div className="page2-bottom-div">
                <Link to="/Page3">
                    <button className="page2-buttom">Próximo</button>
                </Link>
                <Link to="/">
                    <button className="page2-buttom">Voltar</button>
                </Link>
            </div>
        </div>

    )
}