import './styles.css'
import Profile from "../../images/profile.svg"
import Mail from "../../images/mail.svg"
import Book from "../../images/book.svg"

export const SideBar = () => {
    return (

        <div className="main-sidebar-div">
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Pessoal</h2>
                    <p>Se identifique</p>
                </div>
                <img alt="ProfilePic" src={Profile}/>
                <p>ball</p>
            </div>
            <div className="sidebar-sub-div"> 
                <div className="description">
                    <h2>Profissional</h2>
                    <p>Seu nível</p>
                </div>
                <img alt="ProfilePic" src={Book}/>

                <p>ball</p>
            </div>
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Contatos</h2>
                    <p>Como te achar</p>
                </div>
                <img alt="ProfilePic" src={Mail}/>
                <p>ball</p>
            </div>
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Profile</h2>
                    <p>Seu perfil completo</p>
                </div>
                <p>Icon</p>
                <p>ball</p>
            </div>

        </div>


    )
}



