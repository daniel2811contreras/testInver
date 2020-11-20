import React , { useContext } from 'react'
import { Text, View } from 'react-native'
import { FontAwesomeIcon   } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
// context
import { HomeContext } from '../../context/home'
// style
import { nameStyles } from '../../style/name'
import { Color } from '../../style'

const Name = () => {
  const { 
    user
   } = useContext(HomeContext)
  return (
    <View style={nameStyles.container}>
      <Text style={nameStyles.text} >{`Hola, ${user.name}`}</Text>
      <BorderlessButton >
        <FontAwesomeIcon icon={faBell} size={28} color={Color.primary} />
      </BorderlessButton>
    </View>
  );
}

export default Name

