import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
questionTxt: {
        fontSize: RFPercentage(3),
        color: '#475e60',
        padding: '2%',
        marginBottom: '2%',
        flex: 1,
        flexWrap: 'wrap',
    },

    questionTextWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '99.5%',
    },
});