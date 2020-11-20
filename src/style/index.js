import { StyleSheet, Dimensions } from 'react-native';

export const  Color = {
  primary: '#54d1ed',
  secon: '#a99dc6',
  tree: '#3a9cdf',
  while: '#ffffff',
  fondo: '#F8F8FC',
  text: '#58506B',
  btn: '#41CF69',
  contracBtn: '#E4FFEE'
}

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height ,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height ,
    backgroundColor: Color.fondo,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
});
