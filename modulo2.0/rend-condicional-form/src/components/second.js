import './App.css';



export default class second extends React.Component {  
    render() {  
        return ( 
            <>
                <TextStyle>Etapa 2 - Informações do ensino superior</TextStyle>
                <p>Qual o curso?</p>
                <input placeholder='Curso'/>
                <p>Qual a unidade de ensino?</p>
                <input placeholder='Nome da faculdade'/>
                <br/>
                <br/>
                <button>Próxima página</button>
            </>
        )
    }
}
