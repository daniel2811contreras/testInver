import React, { useContext, useRef } from 'react'
import { Dimensions, Image, ImageBackground, Text, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
// context
import { HomeContext } from '../../context/home'
// style
import { savingStyle } from '../../style/saving'
import { Color } from '../../style'
// funtion
import { ruleTree } from '../../funtion'

const Saving = () => {
  const refSaving = useRef(null)
  const { 
    saving,
    paginationSaving, setPaginationSaving
  } = useContext(HomeContext)
  return (
    <View style={savingStyle.container}>
      <Carousel
        ref={refSaving}
        data={saving.carusel}
        sliderWidth={ruleTree(Dimensions.get('window').width, 90)}
        itemWidth={ruleTree(Dimensions.get('window').width, 90)}
        snapToAlignment='start'
        loop={true}
        layout={'stack'}
        onSnapToItem={index => setPaginationSaving(index)}
        renderItem={({item, index}) => 
          (<View style={savingStyle.contItem} key={index}>
            <ImageBackground
              style={savingStyle.imgBack}
              source={item.img}
            >
              <FontAwesomeIcon icon={faPlayCircle} size={35} color={Color.while} />
            </ImageBackground>
            <View style={savingStyle.contInfo}>
              <ImageBackground 
                style={savingStyle.imgInfo}
                source={require('../../../assets/img/vector.png')} >
                <Text style={savingStyle.titleInfo}>{item.title}</Text>
                <Text style={savingStyle.textInfo}>{item.text}</Text>
              </ImageBackground>
            </View>
          </View>)}
      />
      <Pagination 
        dotsLength={saving.carusel.length}
        activeDotIndex={paginationSaving}
        containerStyle={savingStyle.containerStyle}
        dotStyle={savingStyle.dotStyle}
        inactiveDotStyle={savingStyle.inactiveDotStyle}
        inactiveDotScale={0.9}
      />
      <View style={savingStyle.contArticel}>
          {saving.article.map((arti, i)=> <View style={savingStyle.contInfoArticel} key={i}>
            <View style={savingStyle.infoArticel}>
              <Text style={savingStyle.titleArticel}>{arti.title}</Text>
              <Text style={savingStyle.textArticel}>{arti.text}</Text>
            </View>
            <Image source={arti.img} />
          </View>)}
      </View>
    </View>
  );
}

export default Saving

