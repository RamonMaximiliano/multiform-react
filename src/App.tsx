import React, {useState} from 'react';
import './App.css';
import { Header } from './components/Header/index'
import { Route, Routes } from 'react-router-dom'
import { SideBar } from './components/SideBar/index'
import { Page1 } from './components/Page1/index'
import { Page2 } from './components/Page2/index'
import { Page3 } from './components/Page3/index'
import { Page4 } from './components/Page4/index'
import { LoginContext } from '../src/Context/Context'

type FormData = {
  name?:string,
  professional_level?:number,
  email?:string,
  github?:string,
  page?:number
}

function App() { 
  const [name,setName] = useState<string>()
  const [professional_level,setProfessionalLevel] = useState<number>()
  const [email,setEmail] = useState<string>()
  const [github,setGithub] = useState<string>()
  const [page,setPage] = useState<number>(1)

  const FullProfile:FormData = {
    name:name,
    professional_level:professional_level,
    email:email,
    github:github,
    page:page
  }
  console.log(FullProfile)

  return (
    <>
      <Header />
      <div className="main-content">
        <LoginContext.Provider value={{setName,setProfessionalLevel,setEmail,setGithub,setPage,FullProfile}}>
        <SideBar />
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/Page2" element={<Page2/>}/>
          <Route path="/Page3" element={<Page3/>}/>
          <Route path="/Page4" element={<Page4/>}/>
        </Routes>
        </LoginContext.Provider>
      </div>
    </>
  );
}
export default App;


/*

Context Learning video
https://www.youtube.com/watch?v=sP7ANcTpJr8&ab_channel=PedroTech


Pagina 1: 
colocar nome nos dados 
botão next
lateral aparece que step vc esta

Pagina 2:
aparece nome colocado na pagina 1 
se voltar na pagina 1 e trocar, na pagina 2 o nome atual aparece
botão next e botão voltar
lateral aparece que step vc esta
escolhe se iniciante ou não
Ao voltar, atualizar o page em que esta

Pagina 3: 
aparece nome colocado na pagina 1 
add email e github
botão next e botão voltar
lateral aparece que step vc esta

Pagina 4:
display dos dados coletados nas ultimas paginas / se voltar e trocar os dados, os mesmos são atualizados na ultima
lateral aparece que step vc esta

Pegar foto e nome do github


Check Traversy Routes
https://github.com/bradtraversy/react-crash-2021/blob/master/src/App.js


colocar media, quando dominui tela, components da direita passam para baixo


*/
