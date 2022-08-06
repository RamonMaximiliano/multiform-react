import './styles.css'
import { Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'

type FormData = {
    name?:string,
    level?:number,
    email?:string,
    github?:string,
    page?:number
  }

export const Page1 = () => {
    const [pageName, setPageName] = useState<string>()
    console.log(pageName)
    let profile:FormData = {}

    function setEntireName(){
        if(pageName == ''){
            alert('Digite seu nome!')
        } else {
            profile.name=pageName
            profile.page=2
            console.log(profile)
        }
    } 


/* aqui tem que usar o usenavigate pra impedir ele de ir proxima pagina caso esteja vazio
 */

    return (
        <div className="main-page1">
            <div className="page1-top">
                <p>Passo 1/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
            </div>
            <div className="page1-bottom">
                <p>Seu nome completo</p>
                <input type="text" className="input-name" onChange={event => setPageName(event.target.value)} ></input><br/>
               
                <Link to="/Page2" className="linkButton" >
                    <button className="page1-buttom" onClick={setEntireName}>Próximo
                    </button>
                    </Link>
            </div>
        </div>

    )
}