import {View,TouchableOpacity,ImageBackground,ActivityIndicator} from 'react-native';

import {sG} from '../../components/general/styles';

export const FirstCard = props =>{

    return(
        <TouchableOpacity onPress={()=>{props.handleGetMoreDetails(props.itemId)}} style={[sG.ai_center,sG.jc_center,sG.row_80]}>
            {
                props.loading
                ?
                <View style={[sG.w_100, sG.h_10, sG.chrow, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size="large" color="#2edf6c"/>
                </View>
                :
                <View style={[sG.h_90,sG.w_90,sG.jc_center,sG.ai_center]}>
                    <View style={[sG.h_100,sG.w_100,sG.bg_white,sG.broundedmax,sG.card_shadow]}>
                        <ImageBackground resizeMode='cover' source={{uri:props.image}} style={[sG.w_100,sG.h_100]} ></ImageBackground>
                    </View>
                </View>
            }
        </TouchableOpacity>
    )
}