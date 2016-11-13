import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import styles from './style';

//Read local JSON file:

var customData = require('./data.json');

class winNotification extends Component {
  constructor() {
    super();
    this.state = {
      predictions: [],
    }
  }

  predictionsData() {
    let homeTeamValue = customData.predictions.find(function(pred) {
      return pred.type === "teamGoal" && pred.data.id === customData.fixture.homeTeam.id;
    }).data.value;

    let awayTeamValue = customData.predictions.find(function(pred) {
      return pred.type === "teamGoal" && pred.data.id === customData.fixture.awayTeam.id;
    }).data.value;

    if (awayTeamValue === homeTeamValue){
      return "DRAW";
    }
    if (homeTeamValue > awayTeamValue){
      return customData.fixture.homeTeam.name + " WON";
    }
    else {
      return customData.fixture.awayTeam.name + " WON";
    }
  }

  render() {
    return (
      <Image source={require('./picture/backgroundeffect.png')} style={styles.container}>
        <View style={styles.container}>
          <Image
            style={{width: 250, height: 200}}
            source={require('./picture/wonText.png')} 
          />
          <View style={styles.teams}>
            <View style={styles.firstTeam}>
              <Image
                style={{width: 20, height: 20}}
                source={{uri: customData.fixture.homeTeam.logo}}
              />
              <Text style={styles.testHome}>{customData.fixture.homeTeam.name}</Text>
            </View>
              <Image
                style={{width: 30, height: 30,backgroundColor: '#FFFFFF'}}
                source={require('./picture/complogo@3x.png')} 
              />
            <View style={styles.secondTeam}>
              <Text style={styles.testAway}>{customData.fixture.awayTeam.name}</Text>
              <Image
                style={{width: 20, height: 20}}
                source={{uri: customData.fixture.awayTeam.logo}}
              />
            </View>
          </View>
          <Text style={styles.messageBox}>
            {'\n'}
            {this.predictionsData()}
            {'\n'}
            <Text  style={{fontSize: 28}}>COLLECT {customData.currentPot}</Text>
          </Text>
        </View>
      </Image>
    );
  }
}
AppRegistry.registerComponent('winNotification', () => winNotification);
