import React, { Component } from 'react';
import { AsyncStorage} from "react-native";//nos trae o guarda elementos de la api al cache
import {asyncSendApis} from '../../components/general/services';//nos ayuda a consumir apis


import { DetailsTemplates } from "../../templates/details/details";




export default class Details extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            loading:true,
            productId:'',
            id:'',
            name:'',
            price:'',
            mainName:'',
            description:'',
            image:'',
            subId:'',
            subName:'',
            shipping:'',
            total:'',
        };
    }

    getDetails = async(productId) => {
        // this.setState({loading:true})
        try {
            let data = {
                method: 'GET',
            }
            let response= await asyncSendApis('/api-referencias/referenciassearch/'+productId+'/', data);
            if (response.status) {
                console.log(response);
                this.setState({
                    id:response.id,
                    name:response.nombre,
                    price:response.precio,
                    mainName:response.referencia.nombre,
                    description:response.referencia.descripcion,
                    image:response.referencia.foto,
                    subId:response.referencia.subcategoria.categoria,
                    subName:response.referencia.subcategoria.nombre,
                    shipping:response.referencia.empresario.envio,
                    total:response.total,
                    loading:false
                })
            } else {
                console.log( "ErrorData ==> ", response);
                this.setState({loading: false})
            }
        } catch (error) {
            console.log( "CatchError ==> ", error);
            this.setState({loading: false})
        }
    }

    getDataNavegation = () =>{
        const productId = this.props.navigation.getParam('productId');
        console.log(productId) 
        this.getDetails(productId)
  
    }

    componentDidMount(){
        this.getDataNavegation();
        // this.getDetails();
    }

    render(){
        return(
            <DetailsTemplates
            loading={this.state.loading}
            id={this.state.id}
            name={this.state.name}
            price={this.state.price}
            mainName={this.state.mainName}
            description={this.state.description}
            image={this.state.image}
            subId={this.state.subId}
            subName={this.state.subName}
            shipping={this.state.shipping}
            total={this.state.total}
            >
            </DetailsTemplates>
        )
    }
}