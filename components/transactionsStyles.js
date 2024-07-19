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
        paddingLeft: 4,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    cardMargins: {
        paddingBottom: 0,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    unBoldedTitle: {
        fontSize: 40,
        fontWeight: 'normal',
    },
    unBoldedMiniTitle: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#666',
    },
    rightAlignedText: {
        textAlign: 'right',
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
    viewAllButton: {
        padding: 0,
    },
    buttonLabel: {
        fontSize: 17, 
    },
    rightButtonLabel: {
        fontSize: 15, 
        color: 'rgba(103, 80, 164, 1)',
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
    list: {
        fontSize: 17,
    },
    dealsHeader: {
        marginHorizontal: 28,
    }
});

export default rewardsStyles;
