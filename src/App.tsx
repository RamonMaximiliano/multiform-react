import React from 'react';
import './App.css';
import { Header } from './components/Header/index'
import { Route, Routes, Link } from 'react-router-dom'
import { SideBar } from './components/SideBar/index'
import { Page1 } from './components/Page1/index'
import { Page2 } from './components/Page2/index'
import { Page3 } from './components/Page3/index'
import { Page4 } from './components/Page4/index'

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <SideBar />
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/Page2" element={<Page2/>}/>
          <Route path="/Page3" element={<Page3/>}/>
          <Route path="/Page4" element={<Page4/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;



/*

Verificar estilisação dos botões de navegação pois esta precisando clicar exatamente em cima do texto devido ao Link tag

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
