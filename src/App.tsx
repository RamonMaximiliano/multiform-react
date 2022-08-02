import React from 'react';
import './App.css';
import { Header } from './components/Header/index'
import { SideBar } from './components/SideBar/index'
import { Page1 } from './components/Page1/index'

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <SideBar />
        <Page1 />
      </div>
    </>
  );
}

export default App;



/*

Manter base components estaticos e navegar entre paginas

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


Check Traversy Routes
https://github.com/bradtraversy/react-crash-2021/blob/master/src/App.js


colocar media, quando dominui tela, components da direita passam para baixo


*/
