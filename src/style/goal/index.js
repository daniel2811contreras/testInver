import { StyleSheet } from 'react-native'
// style
import { Color } from '../index'

export const goalStyles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Color.fondo,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  contItem: {
    backgroundColor: Color.while,
    justifyContent: 'space-evenly',
    width: '49%',
    padding: 20,
    borderRadius: 20,
    height: 280
  },
  contImg: {
    justifyContent: 'flex-start'
  },
  img:{
    height: 50,
    resizeMode: 'contain'
  },
  titleItem: {
    fontSize: 17,
    color: Color.secon,
    marginTop: 10,
  },
  contInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contChart: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textChart: {
    fontSize: 10,
    color: Color.primary,
  },
  contText: {
    justifyContent: 'center',
  },
  textSaving: {
    fontSize: 10,
    color: Color.primary,
  },
  textTotal: {
    color: Color.secon,
    fontSize: 9,
  }
});
