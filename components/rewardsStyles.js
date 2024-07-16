import { StyleSheet } from 'react-native';

const rewardsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    creditCardBackground: {
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    cornerImage: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        zIndex: 1,
    },
    centeredTitle: {
        paddingLeft: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    cardMargins: {
        paddingBottom: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    unBoldedTitle: {
        fontSize: 40,
        fontWeight: 'normal',
    },
    unBoldedMiniTitle: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#666',
    },
    rightAlignedText: {
        textAlign: 'right',
        paddingRight: 80
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    divider: {
        marginTop: 8,
    },
    button: {
        marginVertical: 8, 
    },
    buttonLabel: {
        fontSize: 17, 
    },
    mediumUnBoldedTitle: {
        fontSize: 16,
        fontWeight: 'normal',
        marginVertical: 16,
    },
    regularText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    miniText: {
        fontSize: 12,
        color: '#888',
    },
    centerAlign: {
        alignItems: 'center',
    },
});

export default rewardsStyles;
