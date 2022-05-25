import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/images/logo.svg"

function Login() {

    const [loginData, setLoginData] = useState({ email: '', senha: '' });
    console.log(loginData)
    function inputs() {
        return (
            <>
                <input
                    type="email"
                    placeholder="email"
                    required
                    value={loginData.email}
                    onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="senha"
                    required
                    value={loginData.senha}
                    onChange={e => setLoginData({ ...loginData, senha: e.target.value })}
                />
                <button>
                    Entrar
                </button>
                <LinkLogin to="/cadastro">
                    <h3>Não tem uma conta? Cadastre-se!</h3>
                </LinkLogin>
            </>
        )
    }

    const forms = inputs()

    return (
        <>
            <Img src={logo} alt="logo" />
            <Form>{forms}</Form>
        </>
    )
}

const Img = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5em auto 2em auto;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    button {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 0.5em;
        padding: 1em;
        font-size: 1em;
        line-height: 22px;
        color: var(--input-color);
    }

    input:focus,
    button:focus {
        border-color: var(--color-blue);
        outline: none;
    }

    input::placeholder {
        font-size: 1.3em;
        line-height: 25px;
        color: var(--placeholder-color);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-blue);
        color: #FFFFFF;
        font-size: 1.4em;
    }


`

const LinkLogin = styled(Link)`

    margin-top: 25px;

    h3 {
        font-size: 15px;
        font-weight: 400;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`


export default Login;