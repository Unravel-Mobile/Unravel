import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native'
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
        fontSize: RFValue(60),
        textAlign: 'center',
        marginBottom: 10
    },
    headerTwo: {
        fontSize: RFValue(20),
        textAlign: 'center',
        marginBottom: '10%',
    },
    text: {
        fontSize: RFPercentage(3),
        color: '#597579',
    },
    thoughtsList: {
        fontSize: RFPercentage(3),
        color: '#597579',
        textAlign: 'left'
    },
});
