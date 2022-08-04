import './styles.css'
import Profile from "../../images/profile.svg"
import Mail from "../../images/mail.svg"
import Book from "../../images/book.svg"
import Trophy from "../../images/trophy.png"

export const SideBar = () => {
    return (

        <div className="main-sidebar-div">
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Pessoal</h2>
                    <p>Se identifique</p>
                </div>
                <div className="image-div">
                <img alt="ProfilePic" src={Profile} className="image"/>
                </div>
                <div className="small-dot"></div>
            </div>
            <div className="sidebar-sub-div"> 
                <div className="description">
                    <h2>Profissional</h2>
                    <p>Seu nível</p>
                </div>
                <div className="image-div">
                <img alt="ProfilePic" src={Book} className="image"/>
                </div>
                <div className="small-dot"></div>
            </div>
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Contatos</h2>
                    <p>Como te achar</p>
                </div>
                <div className="image-div">
                <img alt="ProfilePic" src={Mail} className="image"/>
                </div>
                <div className="small-dot"></div>
            </div>
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Profile</h2>
                    <p>Seu perfil completo</p>
                </div>
                <div className="image-div">
                <img alt="ProfilePic" src={Trophy} className="image"/>
                </div>
                <div className="small-dot"></div>
            </div>

        </div>


    )
}



