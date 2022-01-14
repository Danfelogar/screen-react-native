import {View,Text,TouchableOpacity,ImageBackground,ActivityIndicator} from 'react-native';

import {sG} from '../../components/general/styles';

export const SecondCard = props =>{

    return(
        <TouchableOpacity onPress={()=>{props.handleGetMoreDetails(props.itemId)}} style={[sG.ai_center,sG.jc_center,sG.row_45,sG.bg_white]}>
            {
                props.loading
                ?
                <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size="large" color="#2edf6c"/>
                </View>
                :
                <View style={[sG.ai_center,sG.jc_center,sG.h_90,sG.w_95,sG.bg_white,sG.card_shadow,sG.brounded]}>
                    <View style={[sG.ai_center,sG.jc_center,sG.chrow,sG.h_100,sG.w_95]}>
                        <View style={[sG.h_100,sG.w_30,sG.ai_center,sG.jc_center]}>
                            <View style={[sG.h_80,sG.w_90,sG.brounded]}>
                                <ImageBackground resizeMode='cover' source={{uri:props.image}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                            </View>
                        </View>
                        <View style={[sG.h_100,sG.w_35,sG.ai_center,sG.jc_center]}>
                            <View style={[sG.h_80,sG.w_95,sG.ai_center,sG.jc_start]}>
                                <View style={[sG.h_20,sG.w_100]}>
                                    <Text style={[sG.h8,sG.text_black, sG.bold]}>{props.name}</Text>
                                </View>
                                <View style={[sG.jc_center,sG.h_55,sG.w_100]}>
                                    <Text style={[sG.h9,sG.text_gray_light]}>Dia de entrega</Text>
                                    <Text style={[sG.h9,sG.text_gray_light]}>Quien recibe</Text>
                                    <Text style={[sG.h9,sG.text_gray_light]}>Direccion de entrega</Text>
                                </View>
                                <View style={[sG.h_25,sG.w_100]}>
                                    <Text style={[sG.h8,sG.text_black, sG.bold]}>Entrega #</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.h_100,sG.w_35,sG.ai_center,sG.jc_center]}>
                            <View style={[sG.h_80,sG.w_95,sG.ai_center,sG.jc_start]}>
                                <View style={[sG.ai_end,sG.h_20,sG.w_100]}>
                                    <Text style={[sG.h8,sG.text_primary, sG.bold]}>#{props.itemId}</Text>
                                </View>
                                <View style={[sG.ai_end,sG.jc_center,sG.h_55,sG.w_100]}>
                                    <Text style={[sG.h9,sG.text_black,sG.bold]}>7 dia del  mes</Text>
                                    <Text style={[sG.h9,sG.text_gray_light]}>Natalia Hernandez</Text>
                                    <Text style={[sG.h9,sG.text_gray_light]}>{props.direction}</Text>
                                </View>
                                <View style={[sG.ai_end,sG.h_25,sG.w_100]}>
                                    <Text style={[sG.h8,sG.text_primary, sG.bold]}>4 de 9</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            }
        </TouchableOpacity>
    )
}