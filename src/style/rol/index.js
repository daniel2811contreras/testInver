import { StyleSheet } from 'react-native'
// style
import { Color } from '../index'

export const rolStyles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Color.fondo,
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 30,
    borderRadius: 20
  },
  contRol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rol: {
    width: '30%',
    color: Color.while,
    fontSize: 18,
    marginBottom: 80
  },
  contImg: {
    width: '90%',
    alignItems: 'flex-end',
    position: 'absolute',
    paddingRight: 20,
    zIndex: 10,
    top: 100
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  balance: {
    color: Color.while,
    fontSize: 15,
    marginBottom: 10
  },
  balanceTotal: {
    color: Color.while,
    fontSize: 36,
    marginBottom: 10
  },
  contInfo: {
    width: '90%',
    marginTop: 30,
    backgroundColor: Color.while,
    borderRadius: 20,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  textInfo: {
    color: Color.text,
    fontSize: 15,
  }
});
