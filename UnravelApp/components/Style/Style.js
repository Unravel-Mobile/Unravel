import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
import { Content } from "native-base";
import { AuthSession } from "expo";
export default StyleSheet.create({
    mainBody: {
        backgroundColor: '#DEF5F8',
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
        // fontFamily: 'Arial',
        fontSize: RFValue(60),
        textAlign: 'center',
        marginBottom: 10
    },
    headerTwo: {
        fontSize: RFValue(20),
        // fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10%',
    },
    // buttons: {
    //     width: '100%',
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     // marginBottom: '5%',
    //     // alignItems: 'center'
    // },
    text: {
        fontSize: RFValue(20)
    },
    headNav: {
        marginTop: '4%',
        backgroundColor: 'transparent',
    },

    headTitle: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        marginTop: '2.5%',
        fontSize: RFPercentage(3),
        color: '#475e60',
        // fontWeight: 'bold',
    },
    arrows: {
        // alignItems: 'center',
        fontSize: RFValue(15),
        color: 'black',
        // fontWeight: 'bold'
    },

    backOfCard: {
        backgroundColor: '#d3f0f2',
        padding: '2%',
        marginBottom: '5%',
        width: '99.5%',
        flex: 1,
        flexWrap: 'wrap'
    },

    questionNo: {
        fontSize: RFPercentage(4),
        // fontWeight: 'bold'
    },

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

    textArea: {
        borderColor: '#475e60',
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
        // fontWeight: 'bold',
    },
    // microphone: {
    //     fontSize: RFPercentage(8),
    //     textAlign: 'center',
    //     color: 'red'
    // },
    reviewSubHead: {
        fontSize: RFPercentage(4),
        justifyContent: 'center',
        // fontWeight: 'bold',
        // backgroundColor: '#d3f0f2',
    },
    viewComponent: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        width: '99%'
    },

    //The Start of the Learn page (static text). 
    learnImg: {
        width: '100%',
        height: '20%',
        marginBottom: '1%'
        // resizeMode: 'contain'
    },


    h1: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#475e60',
    },

    h2: {
        fontSize: RFPercentage(3),
        color: '#597579',
        textAlign: 'left',

    },

    Text: {
        fontSize: RFPercentage(2),
        paddingHorizontal: '5%'
    },
    thoughtsList: {
        fontSize: RFPercentage(3),
        color: '#597579',
        textAlign: 'left'
    },
});