import { StyleSheet } from 'react-native'
// style
import { Color } from '../index'

export const briefcaseStyle = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Color.while,
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
  },
  contItem: {
    backgroundColor: Color.while,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 10
  },
  img:{
    height: 50,
    resizeMode: 'contain'
  },
  contInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10
  },
  text: {
    color: Color.text,
    fontSize: 14
  },
  contChart: {
    flexDirection: 'column',
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textChart: {
    fontSize: 12,
    color: Color.secon,
  },
  textChart2: {
    fontSize: 14,
    color: Color.text,
  },
  contText: {
    width: '49%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  contLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  logo: {
    width: 110,
    height: 30,
    resizeMode: 'contain'
  },
  progress: {
    color: Color.while,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: Color.btn,
    borderRadius: 20,
    fontSize: 12
  },
  textName: {
    fontSize: 14,
    color: Color.text,
    marginBottom: 3
  },
  textTotal: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.text,
    marginBottom: 3
  },
  textType: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.btn,
    marginBottom: 3
  },
  textNameType: {
    width: '75%',
    fontSize: 14,
    color: Color.text,
    marginBottom: 3
  },
  contBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btn: {
    width: 35,
    height: 35,
    borderRadius: 35,
    borderColor: Color.fondo,
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
