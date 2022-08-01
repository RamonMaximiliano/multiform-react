import './styles.css'

export const Page1 = () => {
    return (
        <div className="main-page1">
            <div>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
            </div>
            <div>
                <p>Seu nome completo</p>
                <input type="text" placeholder="Digite seu nome"></input>
                <button>Próximo</button>
            </div>
        </div>

    )
}