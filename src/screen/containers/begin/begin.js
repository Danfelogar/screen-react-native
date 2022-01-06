import React, { Component } from 'react';
import { AsyncStorage} from "react-native";//nos trae o guarda elementos de la api al cache
import {asyncSendApis} from '../../components/general/services';//nos ayuda a consumir apis

import { BeginTemplate } from '../../templates/begin/begin';

export default class Begin extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            loading:false,
            dataProducts:[],
            showModal:false,
            propductSelected: null,
            dataCategories:[],
        };
    }

    getProducts = async() => {
        this.setState({loading:true})
        try {
            let data = {
                method: 'GET',
            }
            let response= await asyncSendApis('/api-referencias/referenciassearch/', data);
            if (response.status) {
                console.log(response);
                this.setState({
                    dataProducts:response,
                    loading:false
                })
                console.log(this.state.dataProducts)
            } else {
                console.log( "ErrorData ==> ", response);
                this.setState({loading: false})
            }
        } catch (error) {
            console.log( "CatchError ==> ", error);
            this.setState({loading: false})
        }
    }

    getCategories = async() => {
        this.setState({loading:true})
        try {
            let data = {
                method: 'GET',
            }
            let response= await asyncSendApis('/api-categorias/categorias/', data);
            if (response.status) {
                console.log(response);
                this.setState({
                    dataCategories:response,
                    loading:false
                })
                console.log(this.state.dataCategories)
            } else {
                console.log( "ErrorData ==> ", response);
                this.setState({loading: false})
            }
        } catch (error) {
            console.log( "CatchError ==> ", error);
            this.setState({loading: false})
        }
    }

    handleShowModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    handleHidenModal = () => {
        this.setState({ showModal: !this.state.showModal })
        this.setState({propductSelected: null})    
    }

    handleSetSelectedProduct = (product) =>{
        this.setState({propductSelected: product})
    }

    componentDidMount () {
        this.getProducts()
        this.getCategories()
    }

    render(){
        return(
            <BeginTemplate
            dataProducts={this.state.dataProducts}
            propductSelected={this.state.propductSelected}
            loading={this.state.loading}
            showModal={this.state.showModal}
            dataCategories={this.state.dataCategories}

            handleShowModal={this.handleShowModal}
            handleSetSelectedProduct={this.handleSetSelectedProduct}
            handleHidenModal={this.handleHidenModal}
            ></BeginTemplate>
        )
    }
}
