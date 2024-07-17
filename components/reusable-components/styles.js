import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  creditCardBackground: {
    backgroundColor: "#9fc0f5"
  },
  downSpace: {
    paddingVertical: 200
  },
  largeContainer: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#d7dade',
    marginBottom: 0,
  },
  fullScreen: {
    width: '100%',
    height: '100%' 
  },
  fullHeight: {
    height: '100%'
  },
  bixBox: {
    width: '100%'
  },
  fullWidth: {
    width: '100%'
  },
  url: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  progressBar: {
    marginVertical: 20,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    width: '100%',
    height: '100%'
  },
  content: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    flex: 1,
    fontSize: 13, 
    marginRight: 10,
  },
  clearButton: {
    position: 'absolute',
    right: 20, 
  },
  button: {
    marginVertical: 10, 
  },
  additionalButtonStyling: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 16,
    marginLeft: 0,
    width: 150
  },
  additionalButtonTextStyling: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  boxContainer: {
    backgroundColor: '#ffffff', 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#dddddd', 
    padding: 12, 
    margin: 16, 
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 2, 
  },
  boxContainerVariation2: {
    backgroundColor: '#ffffff', 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#dddddd', 
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 2, 
  },
  centerAlign: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  regularText:{
    fontSize: 14
  },
  miniText: {
    fontSize: 10
  },
  mediumUnBoldedTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  noPaddingOrMargin: {
    padding: 0,
    margin: 0
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
  unBoldedTitle:{
    fontSize: 30,
    marginBottom: 10,
  },
  unBoldedMiniTitle: {
    fontSize: 15,
    marginBottom: 10
  },
  regBold: {
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 10,
  },
  slider: {
    width: '100%',
    height: 40, 
  },
  centeredTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  centeredImage: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  rightAlignedText: {
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  closerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0, 
    paddingVertical: 0,
  },
  top_right: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  creditCardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 16,
  },
  balanceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  availableCredit: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
  increaseCredit: {
    fontSize: 16,
    textAlign: 'center',
    color: 'blue',
    marginVertical: 8,
  },
  statementText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
  autoPayText: {
    fontSize: 16,
  },
  divider: {
    marginVertical: 8,
  },
  topPane: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#d7dade',
  },
  cardTextContainer: {
    flex: 1,
  },
  creditCardImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  paymentOptionsContainer: {
    marginTop: 16,
  },
  paymentOptionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  paymentMethod: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  paymentMethodDetails: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 8,
  }
});

export default styles;