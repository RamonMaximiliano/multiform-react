import './styles.css'
import { Route, Routes, Link } from 'react-router-dom'
import {LoginContext} from '../../Context/Context'
import {useContext} from 'react'

export const Page2 = () => {

    const {FullProfile} = useContext(LoginContext)

    return (
        <div className="main-page2">
            <div className="page2-top">
                <p>Passo {FullProfile.page}/4</p>
                <h1>{FullProfile.name}, o que melhor descreve você?</h1>
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
                <Link to="/">
                    <button className="page2-buttom">Voltar</button>
                </Link>
                <Link to="/Page3">
                    <button className="page2-buttom">Próximo</button>
                </Link>

            </div>
        </div>

    )
}