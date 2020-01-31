// import statements
import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({

    title: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#475e60',
        paddingBottom: "5%",
    },

    topic: {
        fontSize: RFPercentage(3),
        color: '#597579',
        textAlign: 'left',
    },

    learnImg: {
        width: '100%',
        height: '20%',
        marginBottom: '1%'
    },

});