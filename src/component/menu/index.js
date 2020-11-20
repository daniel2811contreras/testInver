import React , { useContext } from 'react'
import { Text, View } from 'react-native'
import { FontAwesomeIcon   } from '@fortawesome/react-native-fontawesome'
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler'
// context
import { MenuContext } from '../../context/menu'
// style
import { menuStyles } from '../../style/menu'
import { Color } from '../../style'

const App = () => {
  const { 
    menu,
    active, setActive
   } = useContext(MenuContext)
  return (
    <View style={menuStyles.container}>
      {menu.map((item, i) => item.blue ? 
      <View style={menuStyles.item} key={i}>
        <LinearGradient colors={[Color.primary, Color.tree]} style={menuStyles.plus} >
          <BorderlessButton onPress={()=> setActive(item.label)}>
            <FontAwesomeIcon  icon={item.icon} size={28} color={Color.while} />
          </BorderlessButton>
        </LinearGradient>
        <Text style={active===item.label ? menuStyles.textBlue : menuStyles.textRegular } >{item.label}</Text>
      </View>
      :
      <BorderlessButton onPress={()=> setActive(item.label)} key={i}>
        <View style={menuStyles.item}>
          <FontAwesomeIcon  icon={item.icon} size={28} color={active===item.label ? Color.primary : Color.secon } />
          <Text style={active===item.label ? menuStyles.textBlue : menuStyles.textRegular } >{item.label}</Text>
        </View>
      </BorderlessButton>
      )}
    </View>
  );
}

export default App

