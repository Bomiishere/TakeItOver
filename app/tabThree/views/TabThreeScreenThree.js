'use strict'
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, RefreshControl, ScrollView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GiftedChat } from 'react-native-gifted-chat';
import * as Config from '../../constants/config';

export default class TabThreeScreenThree extends React.Component {
  constructor(props) {
    const robot_url = [
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19366204_10203907845891987_2459007927381942638_n.jpg?oh=f84052ef9833f5c36054e0e48c7c2fa6&oe=599C82E9',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19366453_10203907844011940_450462116541654372_n.jpg?oh=e0d4c5b8d2dfddb1571f9be50e662625&oe=59D83A27',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19399443_10203907844051941_3551918138333844875_n.jpg?oh=12663412fedc4d180b5c9aaed9b203ed&oe=599BA0E7',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19396658_10203907844491952_7699986907388359381_n.jpg?oh=813fe6eb64ba619252a31943e37d3f4a&oe=59E5FEE5',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19396616_10203907844811960_6077688100142353824_n.jpg?oh=acdfa456cf673eb1579be9be0aaf0bb0&oe=599C8094',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19396675_10203907845211970_4446786036566665939_n.jpg?oh=8f64542c333a171a315d313eb4c57f04&oe=59D3DDE0',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19366402_10203907845251971_7355641864715726909_n.jpg?oh=213b4e8417ab18351af9371b1af3cbec&oe=59DE56EB',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19226005_10203907845451976_522850543643679572_n.jpg?oh=a7dca0a4d101cebf46bae34974b189c0&oe=59C7A2AC',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19260277_10203907845851986_343995960311253797_n.jpg?oh=323940d52ee200326a2ceea7668c37d7&oe=59E60F54',
      'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19366204_10203907845891987_2459007927381942638_n.jpg?oh=f84052ef9833f5c36054e0e48c7c2fa6&oe=599C82E9',
    ];
    let robot_number = Math.floor(Math.random() * 10) + 1;
    super(props);
    this.state = {
      robot: robot_url[robot_number],
      messages: []
    };
    this.onSend = this.onSend.bind(this);
    this._id = 3;
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: '你好我是隱藏NPC，你可以跟我聊天，但是我都會亂說話～',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: this.state.robot,
          },
        },
      ],
    });
  }
  async onSend(messages = []) {
    this.setState((previousState) => {
      return {
          messages: GiftedChat.append(previousState.messages, messages),
      };
    });
    let response = await fetch(
      `http://${Config.SERVER_IP}:${Config.PORT}/robotapi`,
      {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          'info': messages[0].text,
          'id': this._id++
        })
     }
    )
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return error;
    });
    this.setState((previousState) => {
        const robot = {
          _id: this._id++,
          text: response.data,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: '大天團英雄',
            avatar: this.state.robot,
          },
        }
        return {
          messages: GiftedChat.append(previousState.messages, robot),
        };
    });
  }
  render() {
    console.log(this.state);
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
        isAnimated={true}
      />
    );
  }
}
