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
        paddingLeft: '5%',
        paddingRight: '5%',
        color: '#475e60',
    },

    learnImg: {
        width: '100%',
        height: '20%',
        marginBottom: '3%',
        resizeMode: 'stretch',
    },

    filling: {
        color: '#475e60',
        paddingLeft: '5%',
        paddingRight: '5%',
    },

    contentContainer: {
        height: '230%',
        flexGrow: 1,
    },
});