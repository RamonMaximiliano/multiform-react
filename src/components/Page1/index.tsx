import './styles.css'

export const Page1 = () => {
    return (
        <div className="main-page1">
            <div className="page1-top">
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
            </div>
            <div className="page1-bottom">
                <p>Seu nome completo</p>
                <input type="text" className="input-name"></input><br/>
                <button className="page1-buttom">Próximo</button>
            </div>
        </div>

    )
}