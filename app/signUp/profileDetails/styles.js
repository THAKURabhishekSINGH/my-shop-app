import {Platform, StyleSheet} from 'react-native';
import fonts from '../../themes/fonts'
import metrics from '../../themes/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:metrics.screenHeight*0.007496251874,
        paddingTop: metrics.screenHeight*0.08245877061,
        paddingHorizontal:metrics.screenWidth*0.05333333333
    },
    titleText: {
        alignSelf:'center',
        fontSize:metrics.screenWidth*0.05333333333,
        fontFamily: fonts.type.regular,
        marginBottom:metrics.screenHeight*0.05997001499,
    },
    inputIOS: {
        fontSize: metrics.screenWidth*0.04266666667,
        fontFamily: fonts.type.regular,
        marginBottom:metrics.screenHeight*0.0299850075,
        paddingTop: metrics.screenHeight*0.01949025487,
        paddingHorizontal: metrics.screenWidth*0.02666666667,
        paddingBottom: metrics.screenHeight*0.0179910045,
        borderBottomWidth: 1,
        borderColor: '#00A9BA',
        backgroundColor: 'white',
        color: 'black',
    },
    inputBox: {
        paddingRight:metrics.screenWidth*0.02666666667,
        paddingLeft: metrics.screenWidth*0.008,
        borderColor: '#00A9BA',
    },
    plusIcon: {
        color:'#00A9BA',
        // marginTop:-30
    },
    sendCodeButton: {
        height:metrics.screenHeight*0.08995502249,
        backgroundColor:'#FF324D',
        borderRadius:metrics.screenWidth*0.08,
        marginTop:metrics.screenHeight*0.179910045,
        justifyContent:'center',
        alignItems:'center'
    },
    sendButtonText: {
        fontSize:metrics.screenWidth*0.048,
        fontFamily: fonts.type.regular,
        fontWeight: 'bold',
        color:'white'
    },
    skipButton: {
        color:'#00A9BA',
        alignSelf:'center',
        marginTop:metrics.screenHeight*0.0299850075,
        fontSize:metrics.screenWidth*0.05333333333,
        fontFamily: fonts.type.regular,
        textDecorationLine: 'underline'
    },
});

export default styles