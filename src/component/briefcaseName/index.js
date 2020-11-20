import React from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
// style
import { nameStyles } from '../../style/name'

const BriefcaseName = () => {
  return (
    <View style={{...nameStyles.container, marginTop: 40}}>
      <Text style={nameStyles.text} >Conoce tu portafolio</Text>
        <View style={nameStyles.buttonCont}>
          <RectButton style={nameStyles.button} >
              <Text style={nameStyles.buttonText}>Estratega</Text>
          </RectButton>
        </View>
    </View>
  );
}

export default BriefcaseName

