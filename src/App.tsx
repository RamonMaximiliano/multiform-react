import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



/*

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

*/
