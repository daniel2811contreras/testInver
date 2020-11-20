import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, View } from 'react-native'
// component
import Menu from './menu'
import Name from './name'
import Rol from './rol'
import GoalName from './goalName'
import Goal from './goal'
import BriefcaseName from './briefcaseName'
import Briefcase from './briefcase'
import SavingName from './savingName'
import Saving from './saving'
// style
import { styles, Color } from '../style'

const App = () => {
  return (
    <View style={styles.app}>
      <ScrollView >
        <View style={styles.container}>
          <StatusBar style="auto" backgroundColor={Color.fondo} />
          <Name />
          <Rol />
          <GoalName />
          <Goal />
          <BriefcaseName />
          <Briefcase />
          <SavingName />
          <Saving />
        </View>
      </ScrollView>
    <Menu />
    </View>
  );
}

export default App

