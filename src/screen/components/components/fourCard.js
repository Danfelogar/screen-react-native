import {View,Text,TouchableOpacity,ImageBackground,ActivityIndicator} from 'react-native';

import {sG} from '../../components/general/styles';

export const FourCard = props =>{

    return(
        <TouchableOpacity onPress={()=>{props.handleGetMoreDetails(props.itemId)}} style={[sG.ai_center,sG.jc_center,sG.row_45,sG.h_90]}>
            {
                props.loading
                ?
                <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size="large" color="#2edf6c"/>
                </View>
                :
                <View style={[sG.ai_center,sG.jc_center,sG.h_90,sG.w_95,sG.bg_white,sG.card_shadow,sG.brounded]}>
                    <View style={[sG.chrow,sG.h_80, sG.w_95, sG.ai_center, sG.jc_center]} >
                        <View style={[sG.h_100,sG.w_35,sG.ai_center,sG.jc_center]}>
                            <View style={[sG.h_90,sG.w_90,sG.brounded]}>
                                <ImageBackground resizeMode='cover' source={{uri:props.image}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                            </View>
                        </View>
                        <View style={[sG.h_100,sG.w_65]}>
                            <View style={[sG.h_95,sG.w_95,sG.ai_center,sG.jc_start]}>
                                <View style={[sG.h_20,sG.w_100]}>
                                    <Text style={[sG.h8,sG.text_black, sG.bold]}>{props.name1}</Text>
                                </View>
                                <View style={[sG.h_20,sG.w_100]}>
                                    <Text style={[sG.h9,sG.text_gray_light]}>{props.name2}</Text>
                                </View>
                                <View style={[sG.h_20,sG.w_100]}>
                                    <Text style={[sG.h9,sG.text_secondary]}>{props.ref1}/{props.ref2}</Text>
                                </View>
                                <View style={[sG.h_20,sG.w_100]}>
                                    <Text style={[sG.h9,sG.text_gray_light]}>Cota. Cundinamarca</Text>
                                </View>
                                <View style={[sG.h_20,sG.w_100]}>
                                    <Text style={[sG.h8,sG.text_black, sG.bold ]}>${props.total} <Text style={[sG.h9,sG.text_gray_light ]}>Paquete</Text> <Text style={[sG.h8,sG.text_black ]}>x6 Uni.</Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            }
        </TouchableOpacity>
    )
}