import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { Colors } from '../constants/colors';

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <View style={styles.card}>
        <Image
          source={require('../../assets/foto.png')}
          style={styles.photo2x2}
          resizeMode="cover"
        />
        <Text style={styles.name}>Gabriel Alcequiez</Text>
        <Text style={styles.email}>2025-1062@itla.edu.do</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginTop: 24,
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  photo2x2: {
    width: 140,
    height: 140,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#2563EB',
    marginBottom: 16,
    backgroundColor: '#F8FAFC',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  email: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DBEAFE',
    overflow: 'hidden',
  },
});
