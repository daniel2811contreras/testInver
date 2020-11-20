import React , { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// context
import { HomeContext } from '../../context/home'
// style
import { rolStyles } from '../../style/rol'
import { Color } from '../../style'
// funtion
import { formateMoney } from '../../funtion'

const Rol = () => {
  const { 
    user
   } = useContext(HomeContext)
  return (
    <>
    <View style={rolStyles.contImg} >
      <Image style={rolStyles.img} source={require('../../../assets/img/userRol.png')}  />
    </View>
    <LinearGradient colors={[Color.primary, Color.tree]} style={rolStyles.container}>
      <View style={rolStyles.contRol}>
        <Text style={rolStyles.rol} >{`Eres ${user.rol}`}</Text>
      </View>
      <View>
        <Text style={rolStyles.balance} >Tu saldo</Text>
        <Text style={rolStyles.balanceTotal}>{`$${formateMoney(user.bill.balance)}`}</Text>
      </View>
    </LinearGradient>
    <View style={rolStyles.contInfo}>
      <View style={rolStyles.info}>
        <Text style={rolStyles.textInfo}>Inversión</Text>
        <Text style={rolStyles.textInfo}>{`$${formateMoney(user.bill.investment)}`.replace('$-', '-$')}</Text>
      </View>
      <View style={rolStyles.info}>
        <Text style={rolStyles.textInfo}>Rendimiento</Text>
        <Text style={rolStyles.textInfo}>{`$${formateMoney(user.bill.performance)}`.replace('$-', '-$')}</Text>
      </View>
    </View>
    </>
  );
}

export default Rol

