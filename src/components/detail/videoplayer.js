import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import Video from 'react-native-video';

class videoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
              rate: 1,
              volume: 1,
              muted: false,
              resizeMode: 'contain',
              duration: 0.0,
              currentTime: 0.0,
              paused: true
            };           
  }
  
  render() {  
    return (<ScrollView style={{ flex: 1, height: 1000 }}>
               <View style={{ flex: 1, height: 300 }}>
                    <TouchableOpacity style={styles.fullScreen} onPress={() => this.setState({ paused: !this.state.paused })} >
                    <Video
                        source={this.props.loc}   // Can be a URL or a local file.
                        ref={(ref) => {
                        this.player = ref;
                        }}                                      // Store reference
                        rate={0}                              // 0 is paused, 1 is normal.
                        volume={1.0}                            // 0 is muted, 1 is normal.
                        muted={false}                           // Mutes the audio entirely.
                        paused={this.state.paused}                          // Pauses playback entirely.
                        resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                        repeat={false}                           // Repeat forever.
                        playInBackground={false}                // Audio continues to play when app entering background.
                        playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                        progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)                        
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 250, flex: 1 }} 
                    />
                </TouchableOpacity>
              </View>              
          </ScrollView>
          );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});

export { videoPlayer };
