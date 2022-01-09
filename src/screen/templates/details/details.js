import {View, Text, ImageBackground,ActivityIndicator} from 'react-native';

import {sG} from '../../components/general/styles';

export const DetailsTemplates = props =>{
    return(
        <View style={[sG.container, sG.bg_light]}>
            { 
                props.loading
                ?
                <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size="large" color="#2edf6c"/>
                </View>
                :
                <View>

                    <View style={[sG.w_100, sG.h_35]}>
                        <ImageBackground resizeMode='cover' source={{uri:props.image}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                    </View>
                    <View style={[sG.w_100,sG.h_45,sG.jc_center,sG.ai_center]}>
                        <View style={[sG.bg_white,sG.card_shadow,sG.w_90,sG.h_90,sG.jc_center,sG.ai_center,sG.brounded]}>
                            <View style={[sG.w_90,sG.h_90]}>
                                <Text style={[sG.h5,sG.text_black, sG.bold ]}>{props.mainName}</Text>
                                <Text style={[sG.h7,sG.text_gray_light ]}>{props.name}</Text>
                                <Text style={[sG.h7,sG.text_secondary ]}>Alimentos / {props.subId} / {props.subName}</Text>
                                <Text style={[sG.h8,sG.text_gray_light ]}>Cota, Cundinamarca{"\n"}</Text>
                                <Text style={[sG.h8,sG.text_gray_light ]}>{props.description}{"\n"}{"\n"}{"\n"}</Text>
                                <Text style={[sG.h5,sG.text_black, sG.bold ]}>${props.price} <Text style={[sG.h8,sG.text_gray_light ]}>Paquete</Text> <Text style={[sG.h7,sG.text_black ]}>x6 Uni.</Text></Text>
                            </View>                    
                        </View>
                    </View>
                    <View style={[sG.w_100,sG.h_20,sG.jc_start,sG.ai_center]}>
                        <View style={[sG.chrow,sG.w_90,sG.h_90]}>
                            <View style={[sG.w_50, sG.h_100, sG.jc_start, sG.ai_start]}>
                                <View style={[sG.bg_white,sG.w_95,sG.h_95,sG.jc_center,sG.ai_center,sG.brounded,sG.card_shadow]}>
                                    <View style={[sG.w_100,sG.h_25,sG.ai_center,sG.jc_end]}>
                                        <Text style={[sG.h8,sG.text_black ]}>Has realizado</Text>
                                    </View>
                                    <View style={[sG.w_100,sG.h_45,sG.ai_center,sG.jc_center]}>
                                        <Text style={[sG.h1,sG.text_primary, sG.bold ]}>{props.shipping}</Text>
                                    </View>
                                    <View style={[sG.w_100,sG.h_35,sG.ai_center,sG.jc_start]}>
                                    <Text style={[sG.h5,sG.text_primary,sG.bold ]}>Entregas</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[sG.w_50, sG.h_100, sG.jc_start, sG.ai_end]}>
                                <View style={[sG.bg_white,sG.w_95,sG.h_95,sG.jc_center,sG.ai_center,sG.brounded,sG.card_shadow]}>
                                    <View style={[sG.w_100,sG.h_25,sG.ai_center,sG.jc_end]}>
                                        <Text style={[sG.h8, sG.text_center,sG.text_black ]}>Para un total de:</Text>
                                    </View>
                                    <View style={[sG.w_100,sG.h_45,sG.ai_center,sG.jc_center]}>
                                        <Text style={[sG.h1, sG.text_center,sG.text_black, sG.bold ]}>{props.total}.<Text style={[sG.h3, sG.text_center,sG.text_black, sG.bold ]}>000</Text></Text>
                                    </View>
                                    <View style={[sG.w_100,sG.h_35,sG.ai_center,sG.jc_start]}>
                                        <Text style={[sG.h6, sG.text_center,sG.text_primary,sG.bold ]}>$ Pesos</Text>
                                    </View>                        
                                </View>
                            </View>    
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}
