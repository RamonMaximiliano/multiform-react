import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../Context/Context'


export const Page4 = () => {
    const navigate = useNavigate()
    const {setEmail, setGithub, setPage, FullProfile} = useContext(LoginContext)

function backPage(){
    setEmail('')
    setGithub('')
    setPage(3)
    navigate('/Page3')
}

    return (
        <div className="main-page1">
            <div className="page1-top">
                <p>Passo {FullProfile.page}/4</p>
                <h1>Profile</h1>
                <p>{FullProfile.name}</p>
                <p>{FullProfile.professional_level}</p>
                <p>{FullProfile.email}</p>
                <p>{FullProfile.github}</p>
                <p>{FullProfile.page}</p>
            </div>
            <div className="page1-bottom">
                    <button className="page3-buttom" onClick={backPage}>Voltar</button>
            </div>
        </div>

    )
}