import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../Context/Context'

export const Page3 = () => {
    const navigate = useNavigate()
    const { FullProfile, setEmail, setGithub, setPage } = useContext(LoginContext)

    function navigateBack() {
        setEmail('')
        setGithub('')
        setPage(2)
        navigate('/Page2')
    }

    function navigateForward() {
        if (FullProfile.email == '' || FullProfile.email == undefined || FullProfile.github == '' || FullProfile.github == undefined) {
            alert('Please fulfill the boxes')
        } else {
            setPage(4)
            navigate('/Page4')
        }
    }

    return (
        <div className="main-page3">
            <div className="page3-top">
                <p>Passo {FullProfile.page}/4</p>
                <h1>Legal {FullProfile.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato</p>
            </div>

            <div className="page3-inputs">
                <div className="page3-input">
                    <p>Qual seu e-mail?</p>
                    <input type="text" className="input-field" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="page3-input">
                    <p>Qual seu usuário de GitHub?</p>
                    <input type="text" className="input-field" onChange={(e) => setGithub(`https://api.github.com/users/${e.target.value}`)}></input>
                </div>
            </div>

            <div className="page3-bottom-div">
                <button className="page3-buttom" onClick={navigateBack}>Voltar</button>
                <button className="page3-buttom-next" onClick={navigateForward}>Finalizar cadastro</button>
            </div>
        </div>

    )
}