import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
      flex: 1,
    },
    url : {
      color : 'blue',
      textDecorationLine: 'underline',
    },
    progressBar: {
      marginVertical: 20,
    },
    content: {
      padding: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      fontSize: 13, 
      marginRight: 10,
    },
    button: {
      marginTop: 20,
    },
    boxContainer: {
      backgroundColor: '#ffffff', 
      borderRadius: 8, 
      borderWidth: 1, 
      borderColor: '#dddddd', 
      padding: 16, 
      margin: 16, 
      shadowColor: '#000000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.8, 
      shadowRadius: 2, 
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    miniTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    regBold: {
      fontSize: 10,
      fontWeight: 'bold',
      marginRight: 10,

    },
    slider : {
      width: '100%',
      height : 40, 
    },
    centeredTitle : {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
    centeredImage : {
      alignSelf: 'center',
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    rightAlignedText : {
      alignSelf : 'right',
      textAlign : 'right',
    },
    row : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16, 
      paddingVertical: 8,
    },
    top_right :  {
      position : 'absolute',
      top : 0,
      right : 0,
    }
  });

  
  export default styles;