import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
// context
import { HomeContext } from '../../context/home'
// style
import { goalStyles } from '../../style/goal'
import { Color } from '../../style'
// funtion
import { formateMoney, ruleTreeP } from '../../funtion'

const Goal = () => {
  const { 
    goals 
  } = useContext(HomeContext)
  return (
    <View style={goalStyles.container}>
      { goals.map((item, index) => (<View style={goalStyles.contItem} key={index}>
          <View style={goalStyles.contImg}>
            <Image style={goalStyles.img} source={item.img} />
            <Text style={goalStyles.titleItem}>{item.label}</Text>
          </View>
          <View style={goalStyles.contInfo}>
            <View style={goalStyles.contChart}>
              <ProgressCircle
                percent={ruleTreeP(parseFloat(item.saving),parseFloat(item.goalTotal))||0}
                radius={35}
                borderWidth={7}
                color={Color.primary}
                shadowColor={Color.fondo}
                bgColor={Color.while}
              >
                <Text style={goalStyles.textChart}>{`${ruleTreeP(parseFloat(item.saving),parseFloat(item.goalTotal)).toFixed(0)||0}%`}</Text>
              </ProgressCircle>
            </View>
            <View style={goalStyles.contText}>
              <Text style={goalStyles.textSaving}>{`$${formateMoney(item.saving)}`}</Text>
              <Text style={goalStyles.textTotal}>{`$${formateMoney(item.goalTotal)}`}</Text>
            </View>
          </View>
      </View>))}
    </View>
  );
}

export default Goal

