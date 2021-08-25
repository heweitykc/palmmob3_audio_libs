import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,NativeModules,TouchableHighlight,Image,DeviceEventEmitter } from 'react-native';


import * as AudioLibrary from 'palmmob3_audio_libs';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

let mp4Resource = require('./res/download.mp4');

const testFunc = async () => {
  let mp4path = Image.resolveAssetSource(mp4Resource).uri;

  let mp3path = FileSystem.documentDirectory + "test.mp3";

  console.log(AudioLibrary);

  AudioLibrary.getMediaInfo(mp3path, 0, function(str){
    console.log('callback2:' + str);
  });

  let result = await FileSystem.getInfoAsync(mp3path, {});
  console.log(result);

  let result1 = await AudioLibrary.getSupportFormat(1);
  let result2 = await AudioLibrary.getSupportFormat(2);
  console.log(result1);
  console.log(result2);


  let result3 = await DocumentPicker.getDocumentAsync({type: "*/*" });  
  console.log(result3);
  mp4path = result['uri'];
  let cmd = ["ffmpeg", "-i", mp4path, "-f", "mp3", "-vn", mp3path];
  AudioLibrary.runCmd(cmd, function(ret){
    console.log('callback3:' + ret);
  })

  AudioLibrary.listenAudioLibraryEvent("AudioLibrary_start", ((msg) => {
      console.log(msg);
  }));

  // listenAudioLibraryEvent("AudioLibrary_err", ((msg) => {
  //     console.log(msg);
  // }));

  // listenAudioLibraryEvent("AudioLibrary_progress", ((msg) => {
  //     console.log(msg);
  // }));

  // listenAudioLibraryEvent("AudioLibrary_complete", (async (msg) => {
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
