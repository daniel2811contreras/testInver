import React from 'react'
import { Text, View } from 'react-native'
// style
import { nameStyles } from '../../style/name'

const savingName = () => {
  return (
    <View style={{...nameStyles.container, marginTop: 40}}>
      <Text style={nameStyles.text} >Los P*t@s del ahorro</Text>
    </View>
  );
}

export default savingName

