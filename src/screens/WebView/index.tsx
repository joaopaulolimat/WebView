import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebViewContainer() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: 'https://192.168.0.67:5173',
        }}
        allowsUnsecureHttps
        style={{flex: 1}}
        startInLoadingState
        useWebKit
        originWhitelist={['*']}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        mixedContentMode="always"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
