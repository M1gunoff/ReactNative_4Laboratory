import React from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://example.com/video.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 320,
    height: 180,
  }
});

export default VideoScreen;
