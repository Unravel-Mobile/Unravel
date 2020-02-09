import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    button: {
        fontSize: RFPercentage(5),
        backgroundColor: '#DEF5F8',
    },
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    }

});