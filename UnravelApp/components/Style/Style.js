// package installed to work with responsive sizes 11/27/1:25pm  mc

// npm install react-native-responsive-fontsize --save   

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import { StyleSheet } from 'react-native'
import { Content } from "native-base";

export default StyleSheet.create({

    mainBody: {
        backgroundColor: '#B2EBF2',
    },

    logo: {
        marginTop: '5%',
        flex: 1,
        width: '85%',
        alignSelf: 'center'
    },

    logoImg: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain'
    },

    headerOne: {
        // color: 'red',
        fontFamily: 'Arial',
        fontSize: RFValue(60),
        textAlign: 'center',
        marginBottom: 10
    },

    headerTwo: {
        // color: 'blue',
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '5%',
    },

    buttons: {
        width: '100%',
        marginBottom: '5%',
        alignItems: 'center'
    },

    text: {
        fontWeight: 'bold',
        fontSize: RFPercentage(3),
        // fontSize: RFValue(20),
        textAlign: 'center',
        marginBottom: '1%'
    },

    headNav: {
        backgroundColor: '#B2EBF2',
        justifyContent: 'center'
    },

    headTitle: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
    },

    arrows: {
        alignItems: 'center',
        fontSize: RFValue(15),
        color: 'black',
        fontWeight: 'bold'
    },

    backOfCard: {
        backgroundColor: '#d3f0f2',
        padding: '2%'
    },

    questionNo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold'
    },

    questionTxt: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold'
    },

    textArea: {
        borderColor: '#B2EBF2',
        borderRadius: 10,
        borderWidth: 4,
        padding: '10%'
    },

    threeCols: {
        marginTop: '5%',
        flex: 1,
        width: '95%',
        alignSelf: 'center'
    },

    wordButtons: {
        justifyContent: 'center',
        margin: '1%',
    },

    buttonText: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
    },

    microphone: {
        fontSize: RFPercentage(8),
        textAlign: 'center',
        color: 'red'
    },

    thoughtImg: {
        margin: '2%',
        flex: 1,
        alignSelf: 'center',
    },

    reviewHead: {
        backgroundColor: '#B2EBF2',
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        // color:'red'
    },

    reviewSubHead: {
        justifyContent: 'center',
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        backgroundColor: '#d3f0f2',
        // color: 'blue'
    },

    thoughtTxt: {
        fontSize: RFPercentage(3),
    },

});