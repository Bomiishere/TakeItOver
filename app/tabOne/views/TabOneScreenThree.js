'use strict'
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, Dimensions, Platform, ScrollView, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackgroundImage from '../../components/BackgroundImage';
import ZoomImage from 'react-native-zoom-image';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Easing} from 'react-native'; // import Easing if you want to customize easing function
const { width, height } = Dimensions.get("window");
export default class TabOneScreenThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:'行程表',
      headerTitleStyle:{
        alignSelf: 'center',
        marginLeft: -20,
      },
      headerLeft: (
        <Ionicons.Button name="ios-menu" color="#185ffe" style={{marginLeft:13}}backgroundColor="#eeeef2" onPress={() => navigation.navigate('DrawerOpen')}>
        </Ionicons.Button>
      ),
      drawerLabel: '行程表',
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={'md-clipboard'}
          size={Platform == 'ios' ? 26 : 20}
          style={{ color: tintColor }}
        />
      ),
    }
  };
  render() {
    return(
      <ScrollView>
        <Image
          resizeMode='contain'
          style={{width:width, height: height}}
          source={require('../../images/schdule.png')}
        ></Image>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});

      // <BackgroundImage url="schdule">
      // </BackgroundImage>
