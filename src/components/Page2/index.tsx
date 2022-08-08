import './styles.css'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/Context'
import { useContext } from 'react'

export const Page2 = () => {
    const navigate = useNavigate();

    const { FullProfile, setPage, setProfessionalLevel } = useContext(LoginContext)

    function level1() {
        setProfessionalLevel(1)
    }

    function level2() {
        setProfessionalLevel(2)
    }

    function backPage() {
        setProfessionalLevel('')
        setPage(1)
        navigate('/')
    }

    function nextPage() {
        if (FullProfile.professional_level == '' || FullProfile.professional_level == undefined) {
            alert('Choose a level')
        } else {
            setPage(3)
            navigate('/Page3')
        }
    }

    return (
        <div className="main-page2">
            <div className="page2-top">
                <p>Passo {FullProfile.page}/4</p>
                <h1>{FullProfile.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente</p>
            </div>

            <div className="page2-options">
                <div className="sub-page2-options" onClick={level1}>
                    <div className="page2-icon">👶</div>
                    <div>
                        <h3>Sou iniciante</h3>
                        <p>Comecei a programar há menos de 2 anos</p>
                    </div>
                </div>
                <div className="sub-page2-options" onClick={level2}>
                    <div className="page2-icon">😎</div>
                    <div>
                        <h3>Sou Programador</h3>
                        <p>Já programo há 2 anos ou mais</p>
                    </div>
                </div>
            </div>

            <div className="page2-bottom-div">
                <button className="page2-buttom" onClick={backPage}>Voltar</button>
                <button className="page2-buttom" onClick={nextPage}>Próximo</button>
            </div>
        </div>

    )
}