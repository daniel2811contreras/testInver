import React, { useContext, useRef } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import Carousel from 'react-native-snap-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
// context
import { HomeContext } from '../../context/home'
// style
import { briefcaseStyle } from '../../style/briefcase'
import { Color } from '../../style'
// funtion
import { formateMoney, ruleTree } from '../../funtion'

const Briefcase = () => {
  const refBriefcase = useRef(null)
  const { 
    briefcase 
  } = useContext(HomeContext)
  return (
    <View style={briefcaseStyle.container}>
      <Carousel
        ref={refBriefcase}
        data={briefcase.briefcase}
        sliderWidth={ruleTree(Dimensions.get('window').width, 90)-40}
        itemWidth={ruleTree(Dimensions.get('window').width, 90)-40}
        snapToAlignment='start'
        loop={true}
        renderItem={({item, index}) => 
          (<View style={briefcaseStyle.contItem} key={index}>
            <View style={briefcaseStyle.contInfo}>
              <View style={briefcaseStyle.contChart}>
                <ProgressCircle
                  percent={item.progress||0}
                  radius={80}
                  borderWidth={15}
                  color={Color.btn}
                  shadowColor={Color.fondo}
                  bgColor={Color.while}
                >
                  <Image source={item.img} />
                  <Text style={briefcaseStyle.textChart}>{item.name}</Text>
                  <Text style={briefcaseStyle.textChart2}>{item.money}</Text>
                </ProgressCircle>
              </View>
              <View style={briefcaseStyle.contText}>
                <View style={briefcaseStyle.contLogo}>
                  <Image style={briefcaseStyle.logo} source={item.info.logo} />
                  <Text style={briefcaseStyle.progress}>{`${item.progress}%`}</Text>
                </View>
                <Text style={briefcaseStyle.textName}>{item.info.name}</Text>
                <Text style={briefcaseStyle.textTotal}>{`$${formateMoney(item.info.balance)}`}</Text>
                <Text style={briefcaseStyle.textType}>{item.info.descript}</Text>
                <Text style={briefcaseStyle.textNameType}>{item.info.type}</Text>
                <View style={briefcaseStyle.contBtn}>
                  <View style={briefcaseStyle.btn}>
                    <BorderlessButton  style={briefcaseStyle.btn} onPress={()=> refBriefcase.current.snapToNext()}>
                      <FontAwesomeIcon icon={faChevronLeft} size={15} color={Color.text} />
                    </BorderlessButton>
                  </View>
                  <View style={briefcaseStyle.btn} >
                    <BorderlessButton style={briefcaseStyle.btn} onPress={()=> refBriefcase.current.snapToPrev()}>
                        <FontAwesomeIcon icon={faChevronRight} size={15} color={Color.text} />
                    </BorderlessButton>
                  </View>
                </View>
              </View>
            </View>
          </View>)}
      />
      <Text>{briefcase.text}</Text>
    </View>
  );
}

export default Briefcase

