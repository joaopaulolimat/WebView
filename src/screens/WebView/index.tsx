import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewContainer() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: 'https://192.168.0.154:5173',
        }}
        allowsUnsecureHttps
        style={{flex: 1}}
        startInLoadingState
        allowsInlineMediaPlayback
        useWebKit={Platform.OS === 'android'}
        originWhitelist={['*']}
        mediaPlaybackRequiresUserAction={false}
        mixedContentMode="always"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
