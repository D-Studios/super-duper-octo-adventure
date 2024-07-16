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
    boxContainer: {
        borderRadius: 10,
        elevation: 4,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    unBoldedTitle: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    unBoldedMiniTitle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#666',
    },
    rightAlignedTextRS: {
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
        marginVertical: 8,
    },
    button: {
        marginTop: 10,
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
