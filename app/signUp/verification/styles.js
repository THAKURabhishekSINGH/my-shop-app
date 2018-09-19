import { Platform, StyleSheet } from 'react-native';
import fonts from '../../themes/fonts'
import metrics from '../../themes/metrics'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: metrics.screenHeight * 0.007496251874,
        paddingTop: metrics.screenHeight * 0.1499250375,
    },
    titleText: {
        alignSelf: 'center',
        fontSize: metrics.screenWidth * 0.048,
        fontFamily: fonts.type.regular,
        color: 'black'
    },
    phoneText: {
        marginTop: metrics.screenHeight * 0.007496251874,
        alignSelf: 'center',
        fontSize: metrics.screenWidth * 0.05866666667,
        fontFamily: fonts.type.regular,
        color: '#0097AE'
    },
    infoText: {
        marginTop: metrics.screenHeight * 0.05247376312,
        alignSelf: 'center',
        fontSize: metrics.screenWidth * 0.04533333333,
        width: '50%',
        lineHeight: metrics.screenWidth * 0.056,
        textAlign: 'center',
        fontFamily: fonts.type.regular,
        color: 'black',
    },
    otpText: {
        fontWeight: 'normal',
        color: 'black',
        marginTop: metrics.screenHeight * 0.0299850075,
        fontSize: metrics.screenWidth * 0.05333333333,
        fontFamily: fonts.type.regular,
        marginBottom: 0
    },
    didReceiveCode: {
        // marginTop:-425,
        alignSelf: 'center',
        fontSize: metrics.screenWidth * 0.04266666667,
        textAlign: 'center',
        fontFamily: fonts.type.regular,
        color: 'black',
    },
    resendCode: {
        // marginTop:-425,
        alignSelf: 'center',
        fontSize: metrics.screenWidth * 0.03733333333,
        lineHeight: metrics.screenWidth * 0.05333333333,
        textAlign: 'center',
        fontFamily: fonts.type.regular,
        color: '#00A9BA',
    },
    inputView: {
        flexDirection: 'row',
        marginTop: metrics.screenHeight * 0.07496251874,
        height: metrics.screenHeight * 0.05247376312,
        marginHorizontal: metrics.screenWidth * 0.05333333333,
        justifyContent: 'space-between',
        backgroundColor: 'grey'
    },
    conuntryCode: {
        fontSize: metrics.screenWidth * 0.04266666667,
        fontFamily: fonts.type.regular,
        height: metrics.screenHeight * 0.05247376312,
        width: '20%',
        lineHeight: metrics.screenWidth * 0.09333333333,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    inputText: {
        height: metrics.screenHeight * 0.05247376312,
        width: '79.7%',
        fontFamily: fonts.type.regular,
        backgroundColor: 'white',
        paddingLeft: metrics.screenWidth * 0.05333333333
    },
    seprator: {
        marginHorizontal: metrics.screenHeight * 0.05333333333,
        marginTop: metrics.screenHeight * 0.01499250375,
        height: 2,
        backgroundColor: '#52C9D8'
    },
    sendCodeButton: {
        height: metrics.screenHeight * 0.08995502249,
        backgroundColor: '#FF324D',
        marginHorizontal: metrics.screenWidth * 0.05333333333,
        borderRadius: metrics.screenWidth * 0.08,
        marginTop: metrics.screenHeight * 0.07496251874,
        marginBottom: metrics.screenHeight * 0.1499250375,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendButtonText: {
        fontSize: metrics.screenWidth * 0.048,
        fontFamily: fonts.type.regular,
        fontWeight: 'bold',
        color: 'white'
    },
    skipButton: {
        color: '#00A9BA',
        alignSelf: 'center',
        // marginTop:40,
        fontSize: metrics.screenWidth * 0.05333333333,
        fontFamily: fonts.type.regular,
        textDecorationLine: 'underline'
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#303132',
    },
    modalDetailView: {
        marginTop: metrics.screenHeight * 0.08245877061,
        height: metrics.screenHeight * 0.4872563718,
        width: metrics.screenWidth * 0.8,
        backgroundColor: '#FFFFFF',
        borderRadius: metrics.screenWidth * 0.02666666667,
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
    checkIconView: {
        backgroundColor: '#2ACC5A',
        position: 'absolute',
        height: metrics.screenHeight * 0.11994003,
        marginTop: -metrics.screenHeight * 0.05997001499,
        width: metrics.screenWidth * 0.2133333333,
        borderRadius: metrics.screenWidth * 0.1066666667,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    checkIcon: {
        fontSize: metrics.screenWidth * 0.1333333333,
        color: 'white'
    },
    congratulationText: {
        fontSize: metrics.screenWidth * 0.048,
        marginTop: metrics.screenHeight * 0.0299850075,
        fontFamily: fonts.type.regular,
        color: 'black'
    },
    modalPhoneNoText: {
        fontSize: metrics.screenWidth * 0.04,
        marginTop: metrics.screenHeight * 0.0179910045,
        fontFamily: fonts.type.regular,
        color: '#858687'
    },
    modalPhoneNo: {
        fontSize: metrics.screenWidth * 0.06666666667,
        marginTop: metrics.screenHeight * 0.02248875562,
        fontFamily: fonts.type.regular,
        color: '#00A9BA'
    },
    modalVerifiedText: {
        width: '75%',
        marginTop: metrics.screenHeight * 0.01499250375,
        lineHeight: metrics.screenWidth * 0.06133333333,
        textAlign: 'center',
        fontSize: metrics.screenWidth * 0.04533333333,
        color: '#858687',
        fontFamily: fonts.type.regular
    }
});

export default styles