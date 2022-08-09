import './styles.css'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/Context'
import { useContext, useState } from 'react'

export const Page2 = () => {
    const [level1div, setActiveLevel1] = useState<boolean>()
    const [level2div, setActiveLevel2] = useState<boolean>()
    const navigate = useNavigate();

    const { FullProfile, setPage, setProfessionalLevel } = useContext(LoginContext)

    function level1() {
        setActiveLevel1(true)
        setActiveLevel2(false)
        setProfessionalLevel(1)
    }
    let toogleLevel1 = level1div ? "active":"";

    function level2() {
        setActiveLevel2(true)
        setActiveLevel1(false)
        setProfessionalLevel(2)
    }
    let toogleLevel2 = level2div ? "active":"";

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
                <div className={`sub-page2-options ${toogleLevel1}`} onClick={level1} id="level1">
                    <div className="page2-icon">👶</div>
                    <div>
                        <h3>Sou iniciante</h3>
                        <p>Comecei a programar há menos de 2 anos</p>
                    </div>
                </div>
                <div className={`sub-page2-options ${toogleLevel2}`} onClick={level2}>
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