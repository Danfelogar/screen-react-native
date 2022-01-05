import React, { Component } from 'react';
import { AsyncStorage} from "react-native";//nos trae o guarda elementos de la api al cache
import {asyncSendApis} from '../../components/general/services';//nos ayuda a consumir apis

import { BeginTemplate } from '../../templates/begin/begin';

export default class Begin extends Component {
    constructor(props) {
        super(props);    
        this.state = {
        };
    }

    render(){
        return(
            <BeginTemplate>

            </BeginTemplate>
        )
    }
}
