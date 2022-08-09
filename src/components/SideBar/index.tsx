import './styles.css'
import Profile from "../../images/profile.svg"
import Mail from "../../images/mail.svg"
import Book from "../../images/book.svg"
import Trophy from "../../images/trophy.png"
import { LoginContext } from '../../Context/Context'
import { useContext } from 'react'

export const SideBar = () => {
    const { FullProfile } = useContext(LoginContext)

    let page1_class: string = ""
    let page2_class: string = ""
    let page3_class: string = ""
    let page4_class: string = ""

    let current_page: number = FullProfile.page

    switch (current_page) {
        case 2:
            page2_class = "green-class"
            break
        case 3:
            page3_class = "green-class"
            break
        case 4:
            page4_class = "green-class"
            break
        default:
            page1_class = "green-class"
            break
    }

    return (
        <div className="main-sidebar-div">
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Pessoal</h2>
                    <p>Se identifique</p>
                </div>
                <div className={`image-div ${page1_class}`}>
                    <img alt="ProfilePic" src={Profile} className="image" />
                </div>
                <div className={`small-dot ${page1_class}`}></div>
            </div>
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Profissional</h2>
                    <p>Seu nível</p>
                </div>
                <div className={`image-div ${page2_class}`}>
                    <img alt="ProfilePic" src={Book} className="image" />
                </div>
                <div className={`small-dot ${page2_class}`}></div>
            </div>
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Contatos</h2>
                    <p>Como te achar</p>
                </div>
                <div className={`image-div ${page3_class}`}>
                    <img alt="ProfilePic" src={Mail} className="image" />
                </div>
                <div className={`small-dot ${page3_class}`}></div>
            </div>
            <div className="sidebar-sub-div">
                <div className="description">
                    <h2>Profile</h2>
                    <p>Seu perfil completo</p>
                </div>
                <div className={`image-div ${page4_class}`}>
                    <img alt="ProfilePic" src={Trophy} className="image" />
                </div>
                <div className={`small-dot ${page4_class}`}></div>
            </div>

        </div>


    )
}



