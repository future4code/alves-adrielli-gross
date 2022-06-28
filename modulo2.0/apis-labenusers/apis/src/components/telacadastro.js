import React from 'react'
import axios from 'axios'

export default class telacadastro extends React.Component{
    state = {
        nome: '',
        email: ''
    }
    
    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }
    
    handleCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "adrielli-gross-alves"
            }
        })
        .then((resposta) => {
            alert("Usuário(a) cadastrado com sucesso")
       })
        .catch((erro) => {
            alert(erro.response.data.message)
       }) 
    }


    render(){
        return(
            <div>
                <button onClick={this.props.irLista}>Ir para lista de usuários</button>
                <h2>Cadastro</h2>
                <input placeholder='Nome' value={this.state.name} onChange={this.handleNome} />
                <input placeholder='E-mail' value={this.state.name} onChange={this.handleEmail} />
                <button onClick={this.handleCadastro}>Enviar</button>
            </div>
        )
    }
}