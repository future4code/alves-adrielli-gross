import React from 'react';
import axios from 'axios';

class App extends React.Component() {
  state = {
    nomeUsuario: '',
    emailUsuario: '',
    usuario: [],
    logado: false,
  }
  
  setNomeUsuario = (event) => {
    this.setState({nomeUsuario : event.target.value})
  }

  setEmailUsuario = (event) => {
    this.setState({email : event.target.value})
  }

  enviarUsuario = () => {
    body = {

    }
  }

  const userAxio = axios.post(
    'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    {
      headers: {
        Authorization: "adrielli-gross-alves"
      }
    }
  )

  render() {
    let telaUsuario
    if (this.state.logado === false) {
      userTela =
      <div>
        <label>Seu nome</label>
        <input value = {this.state.nomeUsuario} onChange={this.setNomeUsuario} placeholder = 'Seu nome'/>
        <label>Seu email</label>
        <input value = {this.state.emailUsuario} onChange={this.setEmailUsuario} placeholder = 'Seu email'/>
        <buttom onClick = {this.enviarUsuario}>Enviar</buttom>
      </div>
    } else {
    }
    return (
      <div> 
        <button onClick = {this.mostrarUsuario}>Mudar Tela</button>
      </div>
  );
  }
}

export default App;
