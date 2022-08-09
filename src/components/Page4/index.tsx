import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../Context/Context'

export const Page4 = () => {
    const [picture, setPicture] = useState<string>()
    const [gitProfile, setgitProfile] = useState<string>()
    const navigate = useNavigate()
    const { setEmail, setGithub, setPage, FullProfile } = useContext(LoginContext)

    function backPage() {
        setEmail('')
        setGithub('')
        setPage(3)
        navigate('/Page3')
    }

    useEffect(
        function checkingPic() {
            fetch(`${FullProfile.github}`)
                .then(function checkPicture(result) {
                    return result.json()
                })
                .then(function (json) {
                    setPicture(json.avatar_url)
                    setgitProfile(json.html_url)
                })
        }
    )

    return (
        <div className="main-page4">
            <div className="page4-top">
                <div className="profile-subdiv1">
                    <p>Passo {FullProfile.page}/4</p>
                    <h1>Profile</h1>
                    <img src={picture} className="profile-picture" alt="This profile does not exist!"></img>
                </div>
                <div className="profile-subdiv2">
                    <p><strong>Nome: </strong>{FullProfile.name}</p>
                    <p><strong>Nível como dev: </strong>
                        {FullProfile.professional_level == 1 ? <span> Iniciante</span> : <span> Profissional</span>}
                    </p>
                    <p><strong>E-mail: </strong>{FullProfile.email}</p>
                    <a href={gitProfile} target="_blank" className="github-link">Link do GitHub de {FullProfile.name}</a>
                </div>
            </div>

            <div className="page4-bottom">
                <p>Created by Ramon</p>
                <button className="page3-buttom" onClick={backPage}>Voltar</button>
            </div>
        </div>

    )
}