import { Platform, StyleSheet } from 'react-native';
import metrics from '../../themes/metrics'
import fonts from '../../themes/fonts'

const styles = StyleSheet.create({
    container: {
        marginTop: metrics.screenHeight * 0.007496251874,
        paddingTop: metrics.screenHeight * 0.08245877061,
        paddingHorizontal: metrics.screenWidth * 0.05333333333
    },
    titleText: {
        alignSelf: 'center',
        fontSize: metrics.screenWidth * 0.04266666667,
        fontFamily: fonts.type.regular,
        textAlign: 'center',
        marginBottom: metrics.screenHeight * 0.05247376312
    },
    card: {
        flex: 1,
        borderRadius: metrics.screenWidth * 0.01333333333,
        height: metrics.screenHeight * 0.1349325337,
        marginBottom: metrics.screenHeight * 0.004497751124,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: metrics.screenWidth * 0.02666666667
    },
    cardImage: {
        flex: 0.25,
        height: metrics.screenHeight * 0.07496251874,
        width: metrics.screenWidth * 0.1333333333,
        alignSelf: 'center'
    },
    sendCodeButton: {
        height: metrics.screenHeight * 0.08245877061,
        backgroundColor: '#FF324D',
        marginHorizontal: metrics.screenWidth * 0.05333333333,
        borderRadius: metrics.screenWidth * 0.08,
        marginTop: metrics.screenHeight * 0.07496251874,
        marginBottom: metrics.screenHeight * 0.05247376312,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendButtonText: {
        fontSize: metrics.screenWidth * 0.048,
        fontFamily: fonts.type.regular,
        fontWeight: 'bold',
        color: 'white'
    },
    headingView: {
        flexDirection: 'row',
        marginTop: metrics.screenHeight * 0.02548725637,
        marginHorizontal: metrics.screenWidth * 0.01333333333,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardTitleText: {
        fontSize: metrics.screenWidth * 0.048,
        fontFamily: fonts.type.regular,
        color: 'black',
    },
    playIcon: {
        fontSize: metrics.screenWidth * 0.06666666667,
        color: 'black',
        fontWeight: '100'
    },
    descriptionText: {
        fontSize: metrics.screenWidth * 0.02666666667,
        fontWeight: '100',
        color: 'black',
        fontFamily: fonts.type.regular,
        paddingHorizontal: metrics.screenWidth * 0.01333333333,
        marginTop: metrics.screenHeight * 0.007496251874
    },
    switchStyle: {
        backgroundColor: 'white',
        flex: 0.2,
        alignSelf: 'center',
        transform: [{ scaleX: .8 }, { scaleY: .8 }],
        marginLeft: metrics.screenWidth * 0.04
    },
});

export default styles