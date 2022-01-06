import React, { Component } from 'react';
import {View, Text, ImageBackground, ScrollView, TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {sG} from '../../components/general/styles';

export const BeginTemplate = props =>{
    return(
        <View style={[sG.container, sG.bg_light]}>

            {/* tarea 1 */}


            {/* <View style={[sG.w_100, sG.h_35]}>
                <ImageBackground resizeMode='cover' source={{uri:'https://ichef.bbci.co.uk/news/640/cpsprodpb/1400C/production/_93723918_thinkstockphotos-627042504.jpg'}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
            </View>
            <View style={[sG.w_100,sG.h_45,sG.jc_center,sG.ai_center]}>
                <View style={[sG.bg_white,sG.card_shadow,sG.w_90,sG.h_90,sG.jc_center,sG.ai_center,sG.brounded]}>
                    <View style={[sG.w_90,sG.h_90]}>
                        <Text style={[sG.h5,sG.text_black, sG.bold ]}>Arepa Boyacences</Text>
                        <Text style={[sG.h7,sG.text_gray_light ]}>Delicias boyacences</Text>
                        <Text style={[sG.h7,sG.text_secondary ]}>Alimentos / categoria 2 / categoria 3</Text>
                        <Text style={[sG.h8,sG.text_gray_light ]}>Cota, Cundinamarca{"\n"}</Text>
                        <Text style={[sG.h8,sG.text_gray_light ]}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit{"\n"}{"\n"}{"\n"}</Text>
                        <Text style={[sG.h5,sG.text_black, sG.bold ]}>$10.000 <Text style={[sG.h8,sG.text_gray_light ]}>Paquete</Text> <Text style={[sG.h7,sG.text_black ]}>x6 Uni.</Text></Text>
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
                                <Text style={[sG.h1,sG.text_primary, sG.bold ]}>21</Text>
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
                                <Text style={[sG.h1, sG.text_center,sG.text_black, sG.bold ]}>670.<Text style={[sG.h3, sG.text_center,sG.text_black, sG.bold ]}>000</Text></Text>
                            </View>
                            <View style={[sG.w_100,sG.h_35,sG.ai_center,sG.jc_start]}>
                                <Text style={[sG.h6, sG.text_center,sG.text_primary,sG.bold ]}>$ Pesos</Text>
                            </View>                        
                        </View>
                    </View>    
                </View>
            </View> */}

            {/* tarea 2 */}

            {/* <View style={[sG.h_15,sG.w_100,sG.jc_end,sG.ai_center]}>
                <View style={[sG.h_70,sG.w_90,sG.jc_center,sG.ai_center]}>
                    <View style={[sG.bg_white,sG.h_70,sG.w_100,sG.jc_center,sG.ai_center,sG.brounded,sG.card_shadow]}>
                        <View style={[sG.chrow,sG.h_95,sG.w_95,sG.jc_center,sG.ai_center]}>
                            <View style={[sG.h_100,sG.w_80,sG.jc_center,sG.ai_start]}>
                                <Text style={[sG.h7, sG.text_center,sG.text_gray_light]}>¿Que estas buscando?</Text>
                            </View>
                            <View style={[sG.h_100,sG.w_20,sG.jc_center,sG.ai_end]}>
                                <Ionicons name="search" style={[sG.size_icon_sm, sG.text_secondary]} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>
                {
                    props.dataProducts.map((item)=>(
                        <View key={item.id} style={[sG.row_35,sG.w_100,sG.ai_center, sG.jc_center]}>
                                {
                                    props.loading
                                    ?
                                    <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                                        <ActivityIndicator size="large" color="#2edf6c"
                                        // style={[sG.size_loaded, sG.color_loaded]}
                                        />
                                    </View>
                                    :
                                    <TouchableOpacity onPress={()=>{
                                        props.handleShowModal();
                                        props.handleSetSelectedProduct(item);
                                        }}
                                        style={[sG.bg_white,sG.h_90,sG.w_90, sG.ai_center, sG.jc_center,sG.brounded,sG.card_shadow]} >
                                    <View style={[sG.chrow,sG.h_80, sG.w_90, sG.ai_center, sG.jc_center]} >
                                        <View style={[sG.h_100,sG.w_35,sG.ai_center,sG.jc_center]}>
                                            <View style={[sG.h_90,sG.w_90,sG.brounded]}>
                                                <ImageBackground resizeMode='cover' source={{uri:item.referencia.foto}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                                            </View>
                                        </View>
                                        <View style={[sG.h_100,sG.w_65]}>
                                            <View style={[sG.h_95,sG.w_95,sG.ai_center,sG.jc_start]}>
                                                <View style={[sG.h_20,sG.w_100]}>
                                                    <Text style={[sG.h7,sG.text_black, sG.bold]}>{item.referencia.nombre}</Text>
                                                </View>
                                                <View style={[sG.h_20,sG.w_100,sG.jc_end]}>
                                                    <Text style={[sG.h8,sG.text_gray_light]}>{item.referencia.descripcion}</Text>
                                                </View>
                                                <View style={[sG.h_20,sG.w_100]}>
                                                    <Text style={[sG.h8,sG.text_secondary]}>{item.referencia.subcategoria.nombre}/{item.referencia.subcategoria.categoria}</Text>
                                                </View>
                                                <View style={[sG.h_20,sG.w_100]}>
                                                    <Text style={[sG.h8,sG.text_gray_light]}>Cota. Cundinamarca</Text>
                                                </View>
                                                <View style={[sG.h_20,sG.w_100]}>
                                                    <Text style={[sG.h7,sG.text_black, sG.bold ]}>${item.total} <Text style={[sG.h9,sG.text_gray_light ]}>Paquete</Text> <Text style={[sG.h8,sG.text_black ]}>x6 Uni.</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                }
                        </View>
                    ))
                }
            </ScrollView> */}
                {/* inicio modal*/}
                    {/* <Modal animationType="fade" transparent={true} visible={props.showModal}>
                        <View style={[sG.container,sG.ai_center,sG.jc_center]} >
                            <View style={[sG.ai_center,sG.jc_center,sG.h_60,sG.w_80,sG.bg_white,sG.card_shadow,sG.brounded]}>
                                <View style={[sG.ai_center,sG.h_90,sG.w_90]}>
                                    <View style={[sG.ai_center,sG.jc_center,sG.h_40,sG.w_90]}>
                                        <ImageBackground resizeMode='contain' source={{uri:props.propductSelected?.referencia.foto}} style={[sG.w_90,sG.h_90]}></ImageBackground>
                                    </View>
                                    <View style={[sG.ai_center,sG.h_60,sG.w_90]}>
                                        <View style={[sG.ai_center,sG.jc_center,sG.h_20,sG.w_100]}>
                                            <Text style={[sG.h4,sG.text_gray_light]}>{props.propductSelected?.referencia.empresario.nombreEmpresa}</Text>
                                        </View>
                                        <View style={[sG.ai_center,sG.jc_center,sG.h_20,sG.w_100]}>
                                            <Text style={[sG.h4,sG.text_gray_light]}>{props.propductSelected?.referencia.nombre}</Text>
                                        </View>
                                        <View style={[sG.ai_center,sG.jc_end,sG.h_60,sG.w_100]}>
                                            <TouchableOpacity 
                                            onPress={props.handleHidenModal}
                                            style={[sG.ai_center,sG.jc_center,sG.h_20,sG.w_100,sG.bg_secondary,sG.card_shadow,sG.brounded]}>
                                                <Text style={[sG.h5,sG.text_white,sG.text_vcenter]}>Cerrar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                    </Modal> */}
                {/* final modal */}

                {/* tarea 3 */}

                <View style={[sG.h_100,sG.w_100,sG.ai_end,sG.jc_center]}>
                    <View style={[sG.h_90,sG.w_95,sG.ai_start,sG.jc_center]}>
                        <ScrollView>
                            <View style={[sG.row_20,sG.w_100,sG.jc_start]}>
                                <View style={[sG.h_70,sG.w_100]}>
                                    <Text style={[sG.h5,sG.text_primary]}>Top de tus suscripciones</Text>
                                    <Text style={[sG.h8,sG.text_gray_light]}>Llevar el control de tus ingresos es facil</Text>
                                </View>
                            </View>
                            <View style={[sG.row_60,sG.w_100,sG.jc_start]}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        props.dataProducts.map((item)=>(
                                            <View key={item.id} style={[sG.ai_center,sG.jc_center,sG.row_80,sG.h_90]}>
                                                {
                                                    props.loading
                                                    ?
                                                    <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                                                        <ActivityIndicator size="large" color="#2edf6c"/>
                                                    </View>
                                                    :
                                                    <View style={[sG.h_90,sG.w_90,sG.white,sG.card_shadow,sG.broundedmax]}>
                                                        <ImageBackground resizeMode='cover' source={{uri:item.referencia.foto}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                                                    </View>
                                                }
                                            </View>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={[sG.row_20,sG.w_100,sG.jc_start]}>
                                <View style={[sG.h_70,sG.w_100]}>
                                    <Text style={[sG.h5,sG.text_primary]}>Tus Proximas entregas</Text>
                                    <Text style={[sG.h8,sG.text_gray_light]}>Ser la responsable con tus  envios es  clavepara crecer</Text>
                                </View>
                            </View>
                            <View style={[sG.row_45,sG.w_100,sG.jc_start]}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        props.dataProducts.map((item)=>(
                                            <View key={item.id} style={[sG.ai_center,sG.jc_center,sG.row_45,sG.h_90]}>
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
                                                                    <ImageBackground resizeMode='cover' source={{uri:item.referencia.foto}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                                                                </View>
                                                            </View>
                                                            <View style={[sG.h_100,sG.w_35,sG.ai_center,sG.jc_center]}>
                                                                <View style={[sG.h_80,sG.w_95,sG.ai_center,sG.jc_start]}>
                                                                    <View style={[sG.h_20,sG.w_100]}>
                                                                        <Text style={[sG.h8,sG.text_black, sG.bold]}>{item.referencia.nombre}</Text>
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
                                                                        <Text style={[sG.h8,sG.text_primary, sG.bold]}>#{item.id}</Text>
                                                                    </View>
                                                                    <View style={[sG.ai_end,sG.jc_center,sG.h_55,sG.w_100]}>
                                                                        <Text style={[sG.h9,sG.text_black,sG.bold]}>7 dia del  mes</Text>
                                                                        <Text style={[sG.h9,sG.text_gray_light]}>Natalia Hernandez</Text>
                                                                        <Text style={[sG.h9,sG.text_gray_light]}>{item.referencia.empresario.direccion}</Text>
                                                                    </View>
                                                                    <View style={[sG.ai_end,sG.h_25,sG.w_100]}>
                                                                        <Text style={[sG.h8,sG.text_primary, sG.bold]}>4 de 9</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                }
                                            </View>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={[sG.row_15,sG.w_100,sG.jc_start]}>
                                <View style={[sG.h_70,sG.w_100]}>
                                    <Text style={[sG.h6,sG.text_primary]}>Busca tus productos  por categorias</Text>
                                </View>
                            </View>
                            <View style={[sG.row_20,sG.w_100,sG.jc_start]}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        props.dataCategories.map((item)=>(
                                            <View key={item.id} style={[sG.ai_center,sG.jc_center,sG.row_35,sG.h_60]}>
                                                {
                                                    props.loading
                                                    ?
                                                    <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                                                        <ActivityIndicator size="large" color="#2edf6c"/>
                                                    </View>
                                                    :
                                                    <View style={[sG.h_100,sG.w_90,sG.bg_white,sG.card_shadow,sG.broundedmax]}>
                                                        <ImageBackground resizeMode='cover' source={item.imagen ? {uri:item.imagen} : {uri:'https://programacion.net/files/article/20160819020822_image-not-found.png'}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                                                    </View>
                                                }
                                            </View>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={[sG.row_45,sG.w_100,sG.jc_start]}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {
                                        props.dataProducts.map((item)=>(
                                            <View key={item.id} style={[sG.ai_center,sG.jc_center,sG.row_45,sG.h_90]}>
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
                                                                    <ImageBackground resizeMode='cover' source={{uri:item.referencia.foto}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                                                                </View>
                                                            </View>
                                                            <View style={[sG.h_100,sG.w_65]}>
                                                                <View style={[sG.h_95,sG.w_95,sG.ai_center,sG.jc_start]}>
                                                                    <View style={[sG.h_20,sG.w_100]}>
                                                                        <Text style={[sG.h8,sG.text_black, sG.bold]}>{item.referencia.nombre}</Text>
                                                                    </View>
                                                                    <View style={[sG.h_20,sG.w_100]}>
                                                                        <Text style={[sG.h9,sG.text_gray_light]}>{item.nombre}</Text>
                                                                    </View>
                                                                    <View style={[sG.h_20,sG.w_100]}>
                                                                        <Text style={[sG.h9,sG.text_secondary]}>{item.referencia.subcategoria.nombre}/{item.referencia.subcategoria.categoria}</Text>
                                                                    </View>
                                                                    <View style={[sG.h_20,sG.w_100]}>
                                                                        <Text style={[sG.h9,sG.text_gray_light]}>Cota. Cundinamarca</Text>
                                                                    </View>
                                                                    <View style={[sG.h_20,sG.w_100]}>
                                                                        <Text style={[sG.h8,sG.text_black, sG.bold ]}>${item.total} <Text style={[sG.h9,sG.text_gray_light ]}>Paquete</Text> <Text style={[sG.h8,sG.text_black ]}>x6 Uni.</Text></Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                }
                                            </View>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={[sG.row_70,sG.w_100,sG.ai_center,sG.jc_center]}>
                                <View style={[sG.ai_center,sG.jc_center,sG.h_98,sG.w_100]}>
                                    <View style={[sG.ai_center,sG.jc_center,sG.h_95,sG.w_95,sG.brounded,sG.card_shadow]}>
                                        <ImageBackground resizeMode='cover' source={{uri:'https://ichef.bbci.co.uk/news/640/cpsprodpb/1400C/production/_93723918_thinkstockphotos-627042504.jpg'}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
        </View>
    )
}
