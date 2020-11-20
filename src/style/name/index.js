import { StyleSheet } from 'react-native'
// style
import { Color } from '../index'

export const nameStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: 10,
    backgroundColor: Color.fondo,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Color.text,
    fontSize: 18
  },
  buttonCont: {
    backgroundColor: Color.contracBtn,
    borderRadius: 20,
    borderColor: Color.btn,
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden'
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: Color.btn,
  },
  circle: {
    borderColor: Color.primary,
    borderWidth: 3,
    borderStyle: 'solid',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28
  }
});
