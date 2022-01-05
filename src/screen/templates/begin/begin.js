import React, { Component } from 'react';
import {View, Text, ImageBackground, ScrollView, TouchableOpacity, Modal} from 'react-native';

import {sG} from '../../components/general/styles';

export const BeginTemplate = props =>{
    return(
        <View style={[sG.container, sG.bg_white]}> 
            <View style={[sG.w_100, sG.h_35]}>
                <ImageBackground resizeMode='cover' source={{uri:'https://ichef.bbci.co.uk/news/640/cpsprodpb/1400C/production/_93723918_thinkstockphotos-627042504.jpg'}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
            </View>
            <View style={[sG.bg_light,sG.w_100,sG.h_45,sG.jc_center,sG.ai_center]}>
                <View style={[sG.bg_white,sG.card_shadow,sG.w_90,sG.h_90,sG.jc_center,sG.ai_center,sG.brounded]}>
                    <View style={[sG.bg_white,sG.w_90,sG.h_90]}>
                        <Text style={[sG.h5, sG.text_left,sG.text_black, sG.bold ]}>Arepa Boyacences</Text>
                        <Text style={[sG.h7, sG.text_left,sG.text_gray_light ]}>Delicias boyacences</Text>
                        <Text style={[sG.h7, sG.text_left,sG.text_secondary ]}>Alimentos / categoria 2 / categoria 3</Text>
                        <Text style={[sG.h8, sG.text_left,sG.text_gray_light ]}>Cota, Cundinamarca{"\n"}</Text>
                        <Text style={[sG.h8, sG.text_left,sG.text_gray_light ]}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit{"\n"}{"\n"}{"\n"}</Text>
                        <Text style={[sG.h5, sG.text_left,sG.text_black, sG.bold ]}>$10.000 <Text style={[sG.h8, sG.text_left,sG.text_gray_light ]}>Paquete</Text> <Text style={[sG.h7, sG.text_left,sG.text_black ]}>x6 Uni.</Text></Text>
                    </View>                    
                </View>
            </View>
            <View style={[sG.bg_light,sG.w_100,sG.h_20,sG.jc_start,sG.ai_center]}>
                <View style={[sG.chrow,sG.bg_light,sG.w_90,sG.h_90]}>
                    <View style={[sG.bg_light,sG.w_50, sG.h_100, sG.jc_start, sG.ai_start]}>
                        <View style={[sG.bg_white,sG.w_95,sG.h_95,sG.jc_center,sG.ai_center,sG.brounded,sG.card_shadow]}>
                            <View style={[sG.bg_white,sG.w_100,sG.h_25,sG.ai_center,sG.jc_end]}>
                                <Text style={[sG.h8, sG.text_left,sG.text_black ]}>Has realizado</Text>
                            </View>
                            <View style={[sG.bg_white,sG.w_100,sG.h_45,sG.ai_center,sG.jc_center]}>
                                <Text style={[sG.h1, sG.text_left,sG.text_primary, sG.bold ]}>21</Text>
                            </View>
                            <View style={[sG.bg_white,sG.w_100,sG.h_35,sG.ai_center,sG.jc_start]}>
                            <Text style={[sG.h5, sG.text_left,sG.text_primary,sG.bold ]}>Entregas</Text>
                            </View>
                        {/* <Text style={[sG.h1, sG.text_left,sG.text_primary, sG.bold ]}>21 sad</Text>
                        <Text style={[sG.h3, sG.text_left,sG.text_primary ]}>Entregas</Text> */}
                        </View>
                    </View>
                    <View style={[sG.bg_light,sG.w_50, sG.h_100, sG.jc_start, sG.ai_end]}>
                        <View style={[sG.bg_white,sG.w_95,sG.h_95,sG.jc_center,sG.ai_center,sG.brounded,sG.card_shadow]}>
                            <View style={[sG.bg_white,sG.w_100,sG.h_25,sG.ai_center,sG.jc_end]}>
                                <Text style={[sG.h8, sG.text_center,sG.text_black ]}>Para un total de:</Text>
                            </View>
                            <View style={[sG.bg_white,sG.w_100,sG.h_45,sG.ai_center,sG.jc_center]}>
                                <Text style={[sG.h1, sG.text_center,sG.text_black, sG.bold ]}>670.<Text style={[sG.h3, sG.text_center,sG.text_black, sG.bold ]}>000</Text></Text>
                            </View>
                            <View style={[sG.bg_white,sG.w_100,sG.h_35,sG.ai_center,sG.jc_start]}>
                                <Text style={[sG.h6, sG.text_center,sG.text_primary,sG.bold ]}>$ Pesos</Text>
                            </View>                        
                        </View>
                    </View>    
                </View>
            </View>
        </View>
    )
}
