import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,NativeModules,TouchableHighlight,Image } from 'react-native';

// const { AudioLibrary } = NativeModules;

import AudioLibrary from 'react-native-audio-library';

let mp4Resource = require('./res/download.mp4');

const testFunc = () => {
  AudioLibrary.sampleMethod("123", 123, function(str){
    console.log('callback1:' + str);
  });
  AudioLibrary.GetMediaInfo(Image.resolveAssetSource(mp4Resource).uri, 0, function(str){
    console.log('callback2:' + str);
  });  
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableHighlight onPress={testFunc}>
        <Text>test1</Text>          
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
