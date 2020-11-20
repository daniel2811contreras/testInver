import { StyleSheet } from 'react-native'
// style
import { Color } from '../index'

export const savingStyle = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  contItem: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 20,
    overflow: 'hidden',
  },
  imgBack: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  contInfo: {
    height: 80,
    position: 'relative',
    bottom: 60
  },
  imgInfo: {
    position: 'absolute',
    padding: 20,
    height: 140,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleInfo: {
    color: Color.while,
    fontSize: 25,
    marginBottom: 10
  },
  textInfo: {
    color: Color.while,
    fontSize: 12
  },
  containerStyle: {
    justifyContent: 'flex-start',
    marginBottom: 0
  },
  dotStyle: {
    backgroundColor: Color.primary,
    width: 8,
    height: 8
  },
  inactiveDotStyle: {
    backgroundColor: Color.secon,
    width: 8,
    height: 8
  },
  contArticel: {
    backgroundColor: Color.while,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 160
  },
  contInfoArticel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  infoArticel: {
    width: '75%'
  },
  titleArticel: {
    fontSize: 18,
    color: Color.secon,
    marginBottom: 5
  },
  textArticel: {
    fontSize: 12,
    color: Color.text,
    marginBottom: 10
  }
});
