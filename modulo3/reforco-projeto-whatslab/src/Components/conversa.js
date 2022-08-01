import React from "react";
import { useState } from "react";
import styled from 'styled-components'

const Ballon = styled.div`
    display: flex;
`
const Main = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 30%;
    border: 1px solid black;
    height: 100vh;
`
const Inputs = styled.div`
    display: flex;
`
const NameInput = styled.input`
    width: 100px;
`
const MessageInput = styled.input`
    width: 100%;
`

export default function Conversa() {
  const [nameUser, setNameUser] = useState("")
  const [messageUser, setMessageUser] = useState("")
  const [list, setList] = useState([])

  const onSubmit = () => {
    if (nameUser === "" || messageUser === "") {
        return 
    }
    const message = {
        name: nameUser,
        text: messageUser,
    }
    const temp = []
    temp.push(message)
    setList([...list, message])    
} 
  return (
    <Main>
      {list.map((message) => {
        return <Ballon>
            <p><strong>{message.name}</strong>: &nbsp;</p>
            <p> {message.text}.</p>
        </Ballon>
      })} 
      <Inputs> 
      <NameInput placeholder="Nome" value={nameUser} onChange={(e) => {setNameUser(e.target.value)}} />
      <MessageInput placeholder="Mensagem" value={messageUser} onChange={(e) => {setMessageUser(e.target.value)}} />
      <button onClick={onSubmit}>Enviar</button>
      </Inputs>
    </Main>
  );
}
