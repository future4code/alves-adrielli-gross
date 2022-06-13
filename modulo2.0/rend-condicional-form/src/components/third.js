import './App.css';


export default class third extends React.Component {  
    render() {  
        return ( 
            <>
                <TextStyle>Etapa 1 - Informações pessoais</TextStyle>
                
                <p>Por que você não terminou a graduação?</p>
                <input placeholder='Motivo'/>
                <p>Você possui algum curso complementar?</p>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso técnico">Tecnologo</option>
                    <option value="Curso de inglês">Curso de inglês</option>
                    <object value="Outro">Outro</object>
                </select>
                <br/>
                <br/>
                <button>Próxima página</button>
            </>
        )
    }
}
