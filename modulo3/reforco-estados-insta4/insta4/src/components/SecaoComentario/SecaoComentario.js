import React, {Component, useState} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export function SecaoComentario (props) {
	const [ inputComentario, setInputComentario ] = useState("")

	const onChangeComentario = () => {
		setInputComentario()
	}

	
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={inputComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	
}

export default SecaoComentario;
