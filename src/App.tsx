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

Lateral atualizar conforme step que vc esta
Validar campo e-mail

Verificar impedir de abrir as routes direto na aba do navegador


*/
