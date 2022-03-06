import React, {Component} from 'react';

export default class Card extends Component {
    
    nome = "Ignazio";

    constructor(props){
        super(props);
    }
    componentWillMount(){
    }
    render(){
        return(
            <div>
                Ciao {this.nome}
            </div>
        )
    }
    
}