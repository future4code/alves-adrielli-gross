import React from "react"
import axios from "axios"
import styled from "styled-components"


export default class telalistauser extends React.Component{
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers: {
                Authorization: "adrielli-gross-alves"
            }
        })
        .then((resposta) => {
            this.setState({usuarios: resposta.data})
        })
        .catch((erro) => {
            alert("Houve um problema, tente novamente mais tarde!")
        })
    }

    render(){
        <div>
            <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
            <h2>Lista de usuários</h2>
        </div>
    }
}