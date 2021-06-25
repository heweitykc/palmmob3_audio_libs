import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,NativeModules,TouchableHighlight,Image,DeviceEventEmitter } from 'react-native';

// const { AudioLibrary } = NativeModules;

import AudioLibrary from 'react-native-audio-library';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

let mp4Resource = require('./res/download.mp4');

const testFunc = async () => {
  AudioLibrary.sampleMethod("123", 123, function(str){
    console.log('callback1:' + str);
  });
  let mp4path = Image.resolveAssetSource(mp4Resource).uri;

  let mp3path = FileSystem.documentDirectory + "test.mp3";

  AudioLibrary.GetMediaInfo(mp3path, 0, function(str){
    console.log('callback2:' + str);
  });

  let result = await FileSystem.getInfoAsync(mp3path, {});
  console.log(result);

  return;

  // let result = await DocumentPicker.getDocumentAsync({type: "*/*" });  
  // console.log(result);
  // mp4path = result['uri'];
  // let cmd = ["ffmpeg", "-i", mp4path, "-f", "mp3", "-vn", mp3path];
  // AudioLibrary.RunCmd(cmd, function(ret){
  //   console.log('callback3:' + ret);
  // })

  // this.boxStatus = DeviceEventEmitter.addListener("ffmpeg_evt", ((msg) => {
  //     console.log(msg);
  // }));

  // this.boxStatus2 = DeviceEventEmitter.addListener("ffmpeg_complete", (async (msg) => {
  //   let result = await FileSystem.getInfoAsync(mp3path, null);
  //    console.log(result);
  // }));  
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
