import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    reviewButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#DEF5F8',
    },
    reviewSubHead: {
        fontSize: RFPercentage(3),
        color: '#475e60',
    },
    thoughtsList: {
        fontSize: RFPercentage(3),
        color: '#597579',
        textAlign: 'left'
    },
    date: {
        fontSize: RFPercentage(2),
        color: '#597579',
        justifyContent: 'center'
    },
    
});