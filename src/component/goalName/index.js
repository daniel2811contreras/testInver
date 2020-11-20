import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesomeIcon   } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
// style
import { nameStyles } from '../../style/name'
import { Color } from '../../style'

const GoalName = () => {
  return (
    <View style={{...nameStyles.container, marginTop: 40}}>
      <Text style={nameStyles.text} >Tus metas</Text>
      <BorderlessButton>
        <View style={nameStyles.circle}>
            <FontAwesomeIcon icon={faPlus} size={18} color={Color.primary} />
        </View>
      </BorderlessButton>
    </View>
  );
}

export default GoalName

