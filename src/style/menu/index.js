import { StyleSheet } from 'react-native'
// style
import { Color } from '../index'

export const menuStyles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Color.while,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    bottom: 50,
    zIndex: 100,
  },
  item: {
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plus: {
    width: 70,
    height: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20
  },
  textBlue: {
    color: Color.primary,
    fontSize: 10
  },
  textRegular: {
    color: Color.secon,
    fontSize: 10
  }
});
