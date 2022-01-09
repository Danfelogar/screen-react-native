import {View,TouchableOpacity,ImageBackground,ActivityIndicator} from 'react-native';

import {sG} from '../../components/general/styles';

export const ThirdCard = props =>{

    return(
        <TouchableOpacity onPress={()=>{props.handleGetMoreDetails(props.itemId)}} style={[sG.ai_center,sG.jc_center,sG.row_35,sG.h_60]}>
            {
                props.loading
                ?
                <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size="large" color="#2edf6c"/>
                </View>
                :
                <View style={[sG.h_100,sG.w_90,sG.bg_white,sG.card_shadow,sG.broundedmax]}>
                    <ImageBackground resizeMode='cover' source={props.image ? {uri:props.image} : {uri:'https://programacion.net/files/article/20160819020822_image-not-found.png'}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                </View>
            }
        </TouchableOpacity>
    )
}
