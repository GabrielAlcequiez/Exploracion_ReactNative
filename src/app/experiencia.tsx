import { StyleSheet, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { YouTubePlayer } from '../components/YouTubePlayer';

const VIDEO_URL = 'https://youtu.be/PuZtnXswFcA';

export default function ExperienciaScreen() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <YouTubePlayer urlOrId={VIDEO_URL} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
