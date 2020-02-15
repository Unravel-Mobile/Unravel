import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    reviewButton: {
        padding: '5%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#DEF5F8',
    },
    reviewSubHead: {
        marginLeft: '4%',
        fontSize: RFPercentage(4),
        color: '#475e60',
        fontWeight: 'bold',
    },
    date: {
        fontSize: RFPercentage(2),
        color: '#597579',
        justifyContent: 'center'
    },
    thoughtsList: {
        fontSize: RFPercentage(3),
        color: '#597579',
        textAlign: 'left'
    },
    description: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: '#597579'
    },

});