import React from "react";




export default class user extends React.Component {
    state = {
        valueUser:'',
        valueMensage:'',
        arrayMen: [],
    }
    
    onChangeUser = (event) => {
        this.setState({valueUser:event.target.value})
    }

    onChangeMensage = (event) => {
        this.setState({valueMensage:event.target.value})
    }

    onClickButton = () => {
        const novaArray = [...this.state.arrayMen.push(`${this.state.valueUser},: ${this.state.valueMensage}`)]
        this.setState({valueMensage:''})
        this.setState({valueUser:''})

        return ({arrayMen : novaArray})
    }
    

    render() {
        return(
            <>
            <div>
                <ul>
                    {[this.state.arrayMen]}
                </ul>
            </div>
                <input value={this.state.valueUser} onChange={this.onChangeUser} placeholder='User Name'/>
                <input value={this.state.valueMensage} onChange={this.onChangeMensage} placeholder='Mensage'/>
                <button onClick=''>Enter</button>
            </>
        )
    }
}