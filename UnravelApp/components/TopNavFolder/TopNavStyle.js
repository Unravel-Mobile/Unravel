import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    headNav: {
        fontSize: RFPercentage(3),
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: '4%',
        marginBottom: '4%'
    },
    headTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '2.5%',
        fontSize: RFPercentage(3),
        color: '#475e60',
    },
    arrows: {
        fontSize: RFValue(15),
        color: '#475e60',
    },
});