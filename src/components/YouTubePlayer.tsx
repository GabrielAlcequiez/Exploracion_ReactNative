import React, { useMemo } from 'react';
import { StyleSheet, View, Text, Platform, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

interface YouTubePlayerProps {
  urlOrId: string;
}

export function extractYouTubeId(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  return null;
}

const screenWidth = Dimensions.get('window').width;
const playerWidth = Math.min(screenWidth - 40, 520);
const playerHeight = Math.round((playerWidth * 9) / 16);

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ urlOrId }) => {
  const videoId = useMemo(() => extractYouTubeId(urlOrId), [urlOrId]);

  if (!videoId) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Video no encontrado</Text>
      </View>
    );
  }

  const embedUri = `https://www.youtube.com/embed/${videoId}?autoplay=0&playsinline=1`;

  return (
    <View style={styles.playerWrapper}>
      {Platform.OS === 'web' ? (
        <iframe
          src={embedUri}
          title="Video de Experiencia"
          style={{
            width: '100%',
            height: '100%',
            border: 0,
            borderRadius: 14,
          }}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <WebView
          style={styles.webView}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          originWhitelist={['*']}
          source={{
            uri: embedUri,
            headers: {
              Referer: 'https://www.google.com',
            },
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  playerWrapper: {
    width: '100%',
    height: playerHeight,
    backgroundColor: '#000000',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  webView: {
    flex: 1,
    backgroundColor: '#000000',
  },
  errorContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  errorText: {
    color: '#64748B',
    fontSize: 14,
  },
});
