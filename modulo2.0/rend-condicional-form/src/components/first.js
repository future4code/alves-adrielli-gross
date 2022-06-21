import TextStyle from 'App.js'
    
    
export default class first extends React.Component {  
    render() {  
        return ( 
            <>
                <TextStyle>Etapa 1 - Informações pessoais</TextStyle>
                <p>Qual seu nome?</p>
                <input placeholder='Seu nome'/>
                <p>Qual sua idade?</p>
                <input placeholder='Sua idade'/>
                <p>Qual seu e-mail?</p>
                <input placeholder='Seu e-mail'/>
                <p>Qual sua escolaridade?</p>
                <select>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <object value="Ensino superior completo">Ensino superior completo</object>
                </select>
                <br/>
                <br/>
                <button>Próxima página</button>
            </>
        )
    }
}

