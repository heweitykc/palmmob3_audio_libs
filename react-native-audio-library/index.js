// main index.js

import { NativeModules } from 'react-native';

const { AudioLibrary } = NativeModules;

export function listenAudioLibraryEvent(eventName, callback){
    const eventEmitter = new NativeEventEmitter(AudioLibrary);
    this.eventListener = eventEmitter.addListener(eventName, (event) => {
        callback(event);
     });
}

export function getMediaInfo(fpath, attr){
    return AudioLibrary.getMediaInfo(fpath, attr);
}

export function runCmd(cmd){
    return AudioLibrary.runCmd(cmd);
}

export function setDebug(debug){
    return AudioLibrary.setDebug(debug);
}

export function getSupportFormat(formatType){
    return AudioLibrary.getSupportFormat(formatType);
}

export function getSupportCodec(codecType){
    return AudioLibrary.getSupportCodec(codecType);
}

export function cancelTask(){
    AudioLibrary.cancel();
}
