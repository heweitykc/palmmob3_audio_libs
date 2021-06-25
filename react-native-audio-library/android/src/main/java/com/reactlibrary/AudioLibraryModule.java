// AudioLibraryModule.java

package com.reactlibrary;

import com.coder.ffmpeg.annotation.MediaAttribute;
import com.coder.ffmpeg.jni.FFmpegCommand;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;


public class AudioLibraryModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public AudioLibraryModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "AudioLibrary";
    }

    @ReactMethod
    public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
        // TODO: Implement some actually useful functionality
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @ReactMethod
    public void GetMediaInfo(String fpath, int numberArgument, Callback callback) {
        int duration = FFmpegCommand.getMediaInfo(fpath, MediaAttribute.DURATION);
        callback.invoke(duration);
    }
}
